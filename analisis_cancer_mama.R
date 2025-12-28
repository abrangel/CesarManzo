#################################################################
#
# ANÁLISIS PREDICTIVO DE CÁNCER DE MAMA (WDBC)
#
# Descripción:
# Este script implementa un modelo de clasificación para predecir
# si un tumor de mama es benigno o maligno basado en características
# nucleares de imágenes digitalizadas.
#
# Metodología:
# 1. Carga y preprocesamiento del dataset.
# 2. División de los datos en conjuntos de entrenamiento y prueba.
# 3. Entrenamiento de un modelo Random Forest con validación cruzada.
# 4. Evaluación del rendimiento del modelo sobre datos no vistos.
# 5. Análisis de la importancia de las variables.
#
# Autor: Cesar Abrahan Manzo Carvajal
# Fecha: 27/12/2025
#
#################################################################


# 1. CONFIGURACIÓN DEL ENTORNO
# ==============================================================

# Carga de librerías. Se utiliza 'pacman' para una gestión eficiente.
if (!requireNamespace("pacman", quietly = TRUE)) install.packages("pacman")
pacman::p_load(
  "readr",        # Lectura eficiente de CSV
  "dplyr",        # Manipulación de datos
  "ggplot2",      # Visualización de datos
  "caret",        # Framework para modelado predictivo
  "randomForest"  # Algoritmo de clasificación
)

# Se fija la semilla para garantizar la reproducibilidad de los resultados.
set.seed(42)


# 2. CARGA Y EXPLORACIÓN DE DATOS (EDA)
# ==============================================================

cat("Cargando y explorando el dataset...\n")

# Carga de los datos
file_path <- "data2.csv"
if (!file.exists(file_path)) {
  stop("El archivo 'data2.csv' no se encuentra en el directorio de trabajo.")
}
wdbc_data <- read_csv(file_path, show_col_types = FALSE)

cat("Vista inicial de los datos (glimpse):\n")
glimpse(wdbc_data)

cat("\nResumen estadístico de las variables:\n")
summary(wdbc_data)


# 3. PREPROCESAMIENTO Y PREPARACIÓN DE DATOS
# ==============================================================

cat("\nIniciando preprocesamiento de datos...\n")

# El preprocesamiento es clave para asegurar la calidad de los datos
# que alimentarán el modelo.
processed_data <- wdbc_data %>%
  # La columna ID es un identificador único y no aporta valor predictivo.
  select(-ID) %>%
  # La variable objetivo 'Diagnosis' se convierte a un factor, que es el
  # formato requerido por 'caret' para problemas de clasificación.
  # Se asignan etiquetas más descriptivas para claridad.
  mutate(Diagnosis = factor(Diagnosis,
                         levels = c("B", "M"),
                         labels = c("Benign", "Malignant")))

# Se comprueba la proporción de cada clase en la variable objetivo.
# Un desbalance severo podría requerir técnicas de muestreo adicionales.
cat("\nDistribución de la variable objetivo 'Diagnosis':\n")
print(prop.table(table(processed_data$Diagnosis)))


# 4. DIVISIÓN DEL CONJUNTO DE DATOS
# ==============================================================

cat("\nDividiendo los datos en conjuntos de entrenamiento (80%) y prueba (20%)...\n")

# Se dividen los datos para entrenar el modelo con una porción y evaluarlo
# de manera imparcial con otra que el modelo no ha "visto" previamente.
train_indices <- createDataPartition(
  y = processed_data$Diagnosis, # Variable a predecir
  p = 0.8,                      # Proporción para el conjunto de entrenamiento
  list = FALSE
)

# Creación de los conjuntos de datos
train_set <- processed_data[train_indices, ]
test_set  <- processed_data[-train_indices, ]

cat(sprintf(
  "División completada:\n- Set de entrenamiento: %d filas\n- Set de prueba: %d filas\n",
  nrow(train_set), nrow(test_set)
))


# 5. ENTRENAMIENTO DEL MODELO
# ==============================================================

cat("\nEntrenando modelo Random Forest...\n")

# Se define la configuración del entrenamiento. Se usará validación cruzada
# (10-fold CV) para obtener una estimación robusta del rendimiento del modelo
# y evitar el sobreajuste.
train_control <- trainControl(
  method = "cv",
  number = 10,
  summaryFunction = twoClassSummary, # Métricas para clasificación binaria
  classProbs = TRUE # Necesario para calcular ROC
)

# Entrenamiento del modelo Random Forest
# Formula: Diagnosis ~ . indica que 'Diagnosis' será predicha por todas las demás variables.
# Pre-procesamiento: Se centran y escalan las variables predictoras, una buena
# práctica que, aunque no es crítica para Random Forest, estandariza el proceso.
rf_model <- train(
  Diagnosis ~ .,
  data = train_set,
  method = "rf",
  trControl = train_control,
  preProc = c("center", "scale"),
  metric = "ROC" # Métrica a optimizar durante el entrenamiento
)

cat("Modelo entrenado con éxito.\n")
cat("\nMejores parámetros (mtry):", rf_model$bestTune$mtry, "\n")


# 6. EVALUACIÓN DEL MODELO
# ==============================================================

cat("\nEvaluando el rendimiento del modelo en el conjunto de prueba...\n")

# Se realizan predicciones sobre el conjunto de prueba.
predictions <- predict(rf_model, newdata = test_set)

# Se genera la matriz de confusión para comparar las predicciones
# con los valores reales y obtener métricas de rendimiento detalladas.
conf_matrix <- confusionMatrix(
  data = predictions,
  reference = test_set$Diagnosis,
  positive = "Malignant" # Se define la clase positiva
)

cat("\n--- Resultados de la Evaluación ---\n\n")
print(conf_matrix)

# Se extraen y muestran las métricas más importantes.
accuracy <- conf_matrix$overall['Accuracy']
sensitivity <- conf_matrix$byClass['Sensitivity']
specificity <- conf_matrix$byClass['Specificity']

cat(sprintf("\nResumen de Métricas Clave:\n"))
cat(sprintf("  - Precisión (Accuracy): %.4f\n", accuracy))
cat(sprintf("  - Sensibilidad (Recall):  %.4f\n", sensitivity))
cat(sprintf("  - Especificidad:        %.4f\n", specificity))


# 7. ANÁLISIS DE IMPORTANCIA DE VARIABLES
# ==============================================================

cat("\nAnalizando la importancia de las variables predictoras...\n")

# 'caret' permite visualizar qué variables fueron más influyentes para
# el modelo al momento de realizar las predicciones.
var_importance <- varImp(rf_model, scale = FALSE)

# Se crea un gráfico con las 10 variables más importantes.
plot(var_importance, top = 10, main = "Top 10 - Variables más Importantes")

cat("\nEl gráfico de importancia de variables ha sido generado.\n")

######################### FIN DEL SCRIPT #########################

