# Portafolio Interactivo de Cesar Manzo - RStudio Bio-AI

¡Bienvenido al repositorio del portafolio de Cesar Manzo! Este proyecto es una página web interactiva que simula una interfaz de RStudio para mostrar de forma creativa y técnica los conocimientos y proyectos de Cesar en Bioinformática e Inteligencia Artificial.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Descripción

Este portafolio va más allá de una página estática tradicional. Se ha diseñado como una aplicación de una sola página (SPA) que replica el entorno de RStudio, ofreciendo una experiencia inmersiva y familiar para reclutadores y profesionales del sector de la bioinformática y la ciencia de datos.

### Características Principales

- **Interfaz tipo RStudio:** Un diseño profesional y oscuro que simula el popular IDE, con paneles para scripts, consola y visualizaciones.
- **Navegación Interactiva por Temario:** Un panel lateral permite navegar por los diferentes temas de estudio del Máster en Bioinformática.
- **Simulación de Código y Salida:** Al seleccionar un tema, se muestra un script de R simulado en el editor, junto con una salida de consola y una visualización de plots correspondientes, todo ello generado con HTML, CSS y JavaScript.
- **Demostración de Proyectos en Python:** Dentro de la carpeta `proyectos` se incluye un script en Python (`analisis_exploratorio.py`) que realiza un análisis exploratorio de datos de expresión génica y genera un heatmap, demostrando así la capacidad de Cesar en el análisis de datos con Python.

## Proyectos Destacados

### Análisis Exploratorio de Datos con Python

En la carpeta `proyectos` encontrarás un ejemplo práctico de análisis de datos:

- **Script:** `analisis_exploratorio.py`
- **Datos:** `gene_expression.csv`
- **Dependencias:** `requirements.txt`

Para ejecutar este análisis y generar el gráfico:
1.  Navega a la carpeta `proyectos`.
2.  Instala las dependencias: `pip install -r requirements.txt`
3.  Ejecuta el script: `python analisis_exploratorio.py`

Esto guardará un heatmap en la carpeta `assets/images`.

## Base de Conocimientos

La interfaz simula el temario del **Máster en Bioinformática (Universidad Internacional de La Rioja - UNIR)**. Los temas cubiertos incluyen:

<details>
<summary>Algoritmos e Inteligencia Artificial</summary>

- **Introducción a la Inteligencia Artificial (IA)**: Bases conceptuales, Machine Learning (ML), Deep Learning (DL), tipos de ML (supervisado, no supervisado, semisupervisado, refuerzo), y preprocesamiento de datos.
- **Métodos No Supervisados: Reducción de Dimensionalidad I**: PCA, MDS, Isomap, t-SNE.
- **Métodos No Supervisados: Reducción de Dimensionalidad II**: LLE, Laplacian Eigenmap, MVU, UMAP, ICA.
- **Clusterización (Aprendizaje No Supervisado)**: K-means, clusterización jerárquica aglomerativa y divisiva.
- **Análisis Discriminante (Aprendizaje Supervisado)**: LDA, QDA, RDA, FDA.
- **Otros Métodos de Aprendizaje Supervisado I**: k-NN, SVM (lineal y con kernel), Árboles de Decisión.
- **Otros Métodos de Aprendizaje Supervisado II**: Bagging (Random Forest), Naive Bayes, Gradient Boosting Machines (GBM).
</details>

<details>
<summary>Programación Científica y Linux</summary>

- **Introducción a la Bioinformática**: Historia, dogma central de la biología, tipos de datos y bases de datos bioinformáticas.
- **Control de Versiones (Git)**: Creación de repositorios, manejo de ramas, gestión de cambios y repositorios remotos.
- **Introducción a la Programación Científica**: Lenguajes como Python (BioPython), R, Perl y herramientas de desarrollo (IDEs).
- **Fundamentos de Programación**: Tipos de datos, variables, operadores, estructuras de control y funciones.
- **Sistemas Operativos**: Estructura de computadores, componentes y funciones de un SO.
- **Introducción a UNIX / GNU Linux**: Características, distribuciones, línea de comandos y sistema de archivos.
- **UNIX y Shell Scripting**: Comandos básicos, permisos, redirección, variables de entorno y automatización.
- **Introducción a Perl y BioPerl**: Sintaxis, manipulación de archivos y secuencias, y uso de módulos para bioinformática.
</details>

<details>
<summary>Estadística y R para Ciencias de la Salud</summary>

- **Introducción a R y RStudio**: Instalación, aspectos básicos y estructuras de datos.
- **Bibliotecas Específicas (Tidyverse)**: Dplyr, Tidyr, Readr, Gtsummary, Caret.
- **Representación Gráfica (ggplot2)**: Histogramas, diagramas de barras, box plots, scatter plots, heatmaps, volcano plots.
- **Fundamentos de Bioestadística**: Descriptiva e inferencial.
- **Modelos Multivariables en R**: ANCOVA, regresión lineal, correlación, regresión logística y modelos mixtos.
- **Análisis Factorial y PCA**: EFA y PCA.
- **Imputación y Evaluación de Modelos**: Métodos de imputación y evaluación de la discriminación.
</details>

<details>
<summary>Secuenciación y Ómicas de Próxima Generación (NGS)</summary>

- **Tecnologías de Secuenciación**: 1ª, 2ª (NGS) y 3ª generación (Long-read).
- **Ciencias Ómicas**: Genómica, metagenómica, transcriptómica, proteómica, metabolómica.
- **Análisis y Visualización de Datos Genómicos**: Identificación de genes, análisis comparativo y herramientas como IGV.
- **Transcriptómica y Análisis de RNA-seq**: Expresión diferencial, redes de coexpresión.
- **Análisis Genómicos y Metagenómicos**: 16S, shotgun, reconstrucción de genomas (MAGs).
- **Tendencias Emergentes**: Nanopore, PacBio, epigenómica (ChIP-seq, ATAC-seq), GWAS, Single-Cell (scRNA-seq).
- **Integración Multiómica**: Aplicaciones en medicina personalizada y biología de sistemas.
</details>

### Máster en Ciencia de Datos (Techtitute - En Progreso)

- Analítica del dato en la organización empresarial.
- Mercadotecnia y comunicación.
- Comercial y ventas.
- Y más...

### Máster en Robótica y Visión Artificial (Techtitute - En Progreso)

- Robótica e Industria 4.0.
- Arquitecturas Hardware y Software de Robots.
- Modelado Matemático de Robots.
- Cinemática y Dinámica de Robots.
- Y más...


## Tecnologías Utilizadas

- **HTML5**
- **CSS3**: Para los estilos y la simulación de la interfaz de RStudio.
- **JavaScript (Vanilla)**: Para la interactividad, la carga dinámica de contenido y las simulaciones.
- **Python**: Para el script de análisis de datos en la carpeta `proyectos`.

## Getting Started

Para ver el proyecto en tu máquina local:

1.  **Clona el repositorio**
    ```sh
    git clone https://github.com/abrangel/CesarManzo.git
    ```
2.  **Abre `index.html`**
    Navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Cesar Manzo - abrangelm@gmail.com - [Perfil de LinkedIn](https://www.linkedin.com/in/cesar-manzo-0506231b5/)