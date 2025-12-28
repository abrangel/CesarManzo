// --- BASE DE DATOS EXTENDIDA SEGÚN TUS PDFs ---
        const topics = [
            {
                id: 0, title: "0. Intro & Setup R", icon: "fa-terminal", scriptName: "setup_init.R",
                desc: "Configuración inicial y limpieza",
                code: `
<span class="c-com"># TEMA 0: SETUP DEL ENTORNO</span>
<span class="c-com"># ===========================</span>
<span class="c-com"># Limpieza del workspace antes de iniciar</span>
<span class="c-func">rm</span>(<span class="c-args">list</span> = <span class="c-func">ls</span>())

<span class="c-com"># Descargar paquetes base si es necesario</span>
<span class="c-kwd">if</span>(<span class="c-str">"datasets"</span> %in% <span class="c-func">search</span>()) {
    <span class="c-func">detach</span>(<span class="c-str">"package:datasets"</span>, <span class="c-args">unload</span> = <span class="c-num">TRUE</span>)
}

<span class="c-com"># Instalar librerías clave del curso</span>
<span class="c-func">install.packages</span>(<span class="c-func">c</span>(<span class="c-str">"caret"</span>, <span class="c-str">"ggplot2"</span>, <span class="c-str">"cluster"</span>, 
                   <span class="c-str">"randomForest"</span>, <span class="c-str">"xgboost"</span>))

<span class="c-func">print</span>(<span class="c-str">"Entorno Bio-AI listo."</span>)
`,
                console: `> [1] "Entorno Bio-AI listo."<br>> Memory usage: 142 MiB`,
                plotType: "none"
            },
            {
                id: 1, title: "1. Intro IA & ML", icon: "fa-brain", scriptName: "intro_ia.R",
                desc: "Tipos de ML y Preprocesamiento",
                code: `
<span class="c-com"># TEMA 1: INTRODUCCIÓN A LA INTELIGENCIA ARTIFICIAL</span>
<span class="c-com"># =================================================</span>
<span class="c-com"># Preprocesamiento de datos clínicos</span>
<span class="c-kwd">library</span>(caret)

<span class="c-com"># Cargar datos simulados de pacientes</span>
datos <- <span class="c-func">read.csv</span>(<span class="c-str">"pacientes_cancer.csv"</span>)

<span class="c-com"># Normalización (Centrar y Escalar)</span>
<span class="c-com"># Importante para algoritmos sensibles a la escala (KNN, SVM)</span>
preProc <- <span class="c-func">preProcess</span>(datos, <span class="c-args">method</span> = <span class="c-func">c</span>(<span class="c-str">"center"</span>, <span class="c-str">"scale"</span>))
datos_norm <- <span class="c-func">predict</span>(preProc, datos)

<span class="c-func">summary</span>(datos_norm)
`,
                console: `> Min.   :-2.45<br>> 1st Qu.:-0.67<br>> Median : 0.00<br>> Mean   : 0.00 (Centered)<br>> 3rd Qu.: 0.65`,
                plotType: "venn"
            },
            {
                id: 2, title: "2. Dim Red I (PCA/t-SNE)", icon: "fa-compress-arrows-alt", scriptName: "pca_tsne.R",
                desc: "Métodos lineales y probabilísticos",
                code: `
<span class="c-com"># TEMA 2: REDUCCIÓN DIMENSIONALIDAD I</span>
<span class="c-com"># ===================================</span>
<span class="c-kwd">library</span>(RDRToolbox)

<span class="c-com"># 1. PCA: Maximiza varianza (Lineal)</span>
pca_res <- <span class="c-func">prcomp</span>(iris[,1:4], <span class="c-args">scale.</span> = <span class="c-num">TRUE</span>)
<span class="c-func">biplot</span>(pca_res, <span class="c-args">scale</span> = <span class="c-num">0</span>)

<span class="c-com"># 2. t-SNE: Probabilístico (No Lineal)</span>
<span class="c-com"># Ideal para visualización en 2D/3D</span>
<span class="c-kwd">library</span>(Rtsne)
tsne_out <- <span class="c-func">Rtsne</span>(unique_data, <span class="c-args">dims</span> = <span class="c-num">2</span>, 
                  <span class="c-args">perplexity</span> = <span class="c-num">30</span>, 
                  <span class="c-args">verbose</span> = <span class="c-num">TRUE</span>)

<span class="c-func">plot</span>(tsne_out$Y, <span class="c-args">col</span>=clases, <span class="c-args">main</span>=<span class="c-str">"t-SNE Plot"</span>)
`,
                console: `> PCA: PC1 explica 72.9% de varianza.<br>> t-SNE: Iteration 1000, error final: 0.24`,
                plotType: "pca"
            },
            {
                id: 3, title: "3. Dim Red II (UMAP)", icon: "fa-project-diagram", scriptName: "umap_lle.R",
                desc: "Manifolds complejos y Topología",
                code: `
<span class="c-com"># TEMA 3: REDUCCIÓN DIMENSIONALIDAD II</span>
<span class="c-com"># ====================================</span>
<span class="c-com"># UMAP: Preserva estructura global mejor que t-SNE</span>
<span class="c-kwd">library</span>(uwot)

<span class="c-com"># Ejecución de UMAP (rápido y escalable)</span>
umap_res <- <span class="c-func">umap</span>(datos_genomicos, 
                 <span class="c-args">n_neighbors</span> = <span class="c-num">15</span>, 
                 <span class="c-args">n_components</span> = <span class="c-num">2</span>, 
                 <span class="c-args">metric</span> = <span class="c-str">"euclidean"</span>)

<span class="c-com"># LLE (Locally Linear Embedding)</span>
<span class="c-com"># Mantiene vecindad local</span>
<span class="c-kwd">library</span>(RDRToolbox)
lle_res <- <span class="c-func">LLE</span>(data, <span class="c-args">dim</span>=<span class="c-num">2</span>, <span class="c-args">k</span>=<span class="c-num">10</span>)
`,
                console: `> UMAP terminado en 1.45s.<br>> Preservando topología del manifold.<br>> ICA (Independent Comp. Analysis) listo.`,
                plotType: "umap"
            },
            {
                id: 4, title: "4. Clustering", icon: "fa-object-group", scriptName: "clustering.R",
                desc: "K-Means y Jerárquico",
                code: `
<span class="c-com"># TEMA 4: CLUSTERIZACIÓN</span>
<span class="c-com"># ======================</span>
<span class="c-kwd">library</span>(cluster)

<span class="c-com"># 1. Matriz de distancias</span>
dist_matrix <- <span class="c-func">dist</span>(data_muestras)

<span class="c-com"># 2. Clustering Jerárquico (Aglomerativo)</span>
<span class="c-com"># Métodos Linkage: single, complete, average, ward.D2</span>
hc <- <span class="c-func">hclust</span>(dist_matrix, <span class="c-args">method</span> = <span class="c-str">"ward.D2"</span>)

<span class="c-com"># Visualizar Dendrograma</span>
<span class="c-func">plot</span>(hc, <span class="c-args">hang</span> = <span class="c-num">-1</span>)
<span class="c-func">rect.hclust</span>(hc, <span class="c-args">k</span>=<span class="c-num">3</span>, <span class="c-args">border</span>=<span class="c-str">"red"</span>)

<span class="c-com"># 3. K-Means (No jerárquico)</span>
km <- <span class="c-func">kmeans</span>(data_muestras, <span class="c-args">centers</span>=<span class="c-num">3</span>)
`,
                console: `> hclust: Método Ward minimiza varianza intra-cluster.<br>> K-means: WSS = 78.4 (k=3)`,
                plotType: "dendro"
            },
            {
                id: 5, title: "5. Discriminante (LDA/QDA)", icon: "fa-columns", scriptName: "lda_qda.R",
                desc: "Clasificación Lineal y Cuadrática",
                code: `
<span class="c-com"># TEMA 5: ANÁLISIS DISCRIMINANTE</span>
<span class="c-com"># ==============================</span>
<span class="c-kwd">library</span>(MASS)

<span class="c-com"># LDA: Asume igualdad de covarianzas (homocedasticidad)</span>
<span class="c-com"># Genera fronteras lineales</span>
lda_mod <- <span class="c-func">lda</span>(Species ~ ., <span class="c-args">data</span> = iris)

<span class="c-com"># QDA: Permite covarianzas distintas por clase</span>
<span class="c-com"># Genera fronteras curvas (parabólicas)</span>
qda_mod <- <span class="c-func">qda</span>(Species ~ ., <span class="c-args">data</span> = iris)

<span class="c-func">plot</span>(lda_mod)
`,
                console: `> LDA Prior probabilities:<br> setosa: 0.33, versicolor: 0.33, virginica: 0.33<br>> Group means calculadas.`,
                plotType: "separation"
            },
            {
                id: 6, title: "6. Superv. I (Trees/SVM)", icon: "fa-sitemap", scriptName: "trees_svm.R",
                desc: "Árboles y Vectores de Soporte",
                code: `
<span class="c-com"># TEMA 6: MÉTODOS SUPERVISADOS I</span>
<span class="c-com"># ==============================</span>
<span class="c-kwd">library</span>(caret); <span class="c-kwd">library</span>(rpart); <span class="c-kwd">library</span>(rattle)

<span class="c-com"># 1. Árbol de Decisión (CART)</span>
dt_model <- <span class="c-func">train</span>(Clase ~ ., <span class="c-args">data</span> = trainData,
                  <span class="c-args">method</span> = <span class="c-str">"rpart"</span>,
                  <span class="c-args">trControl</span> = <span class="c-func">trainControl</span>(<span class="c-args">method</span>=<span class="c-str">"cv"</span>))

<span class="c-com"># Visualizar Árbol</span>
<span class="c-func">fancyRpartPlot</span>(dt_model$finalModel)

<span class="c-com"># 2. SVM (Kernel Radial)</span>
<span class="c-kwd">library</span>(e1071)
svm_mod <- <span class="c-func">svm</span>(Clase ~ ., <span class="c-args">kernel</span>=<span class="c-str">"radial"</span>, <span class="c-args">cost</span>=<span class="c-num">10</span>)
`,
                console: `> CART: cp óptimo seleccionado por Cross-Validation.<br>> SVM: 45 vectores de soporte identificados.`,
                plotType: "tree"
            },
            {
                id: 7, title: "7. Superv. II (Ensemble)", icon: "fa-layer-group", scriptName: "rf_boosting.R",
                desc: "Random Forest & Boosting",
                code: `
<span class="c-com"># TEMA 7: MÉTODOS SUPERVISADOS II (ENSEMBLE)</span>
<span class="c-com"># ==========================================</span>
<span class="c-kwd">library</span>(randomForest); <span class="c-kwd">library</span>(xgboost)

<span class="c-com"># 1. Random Forest (Bagging)</span>
<span class="c-com"># Crea múltiples árboles independientes y promedia</span>
rf <- <span class="c-func">randomForest</span>(Clase ~ ., <span class="c-args">ntree</span>=<span class="c-num">500</span>, <span class="c-args">importance</span>=<span class="c-num">TRUE</span>)
<span class="c-func">varImpPlot</span>(rf)

<span class="c-com"># 2. Gradient Boosting (Boosting)</span>
<span class="c-com"># Secuencial: corrige errores del anterior (residuos)</span>
xgb <- <span class="c-func">xgboost</span>(<span class="c-args">data</span> = as.matrix(train_x), 
               <span class="c-args">label</span> = train_y, 
               <span class="c-args">nrounds</span> = <span class="c-num">100</span>, 
               <span class="c-args">objective</span> = <span class="c-str">"binary:logistic"</span>)
`,
                console: `> Random Forest: OOB Error = 2.13%<br>> XGBoost: Iter 100, LogLoss = 0.045`,
                plotType: "rf_imp"
            }
        ];

        // --- RENDERIZADO VISUAL ---
        function loadNav() {
            const container = document.getElementById('navItems');
            topics.forEach((t, i) => {
                const btn = document.createElement('button');
                btn.className = `topic-btn ${i===1 ? 'active' : ''}`; // Tema 1 por defecto
                btn.onclick = () => selectTopic(i);
                btn.innerHTML = `
                    <div><i class="fas ${t.icon}"></i> ${t.title}</div>
                    <small>${t.desc}</small>
                `;
                container.appendChild(btn);
            });
            selectTopic(1);
        }

        function selectTopic(index) {
            document.querySelectorAll('.topic-btn').forEach((b, i) => b.classList.toggle('active', i === index));
            const data = topics[index];
            
            // Cargar datos en paneles
            document.getElementById('scriptName').innerText = data.scriptName;
            document.getElementById('codeArea').innerHTML = data.code;
            document.getElementById('consoleOutput').innerHTML = `<span style="color: #61afef;">></span> ${data.console}`;
            
            renderPlot(data.plotType, data.title);
        }

        function renderPlot(type, title) {
            const area = document.getElementById('plotArea');
            area.innerHTML = ''; // Limpiar
            let html = `<div class="chart-title">${title} - Visualización</div>`;
            
            if (type === 'none') {
                 html += `<div style="text-align:center; color:#666; margin-top:50px;">Entorno listo. No hay gráficos generados.</div>`;
            } else if (type === 'venn') {
                html += `
                <div style="position:relative; width:220px; height:220px;">
                    <div style="position:absolute; border:2px solid #61afef; width:220px; height:220px; border-radius:50%; display:flex; justify-content:center; padding-top:10px; color:#61afef; font-weight:bold;">IA</div>
                    <div style="position:absolute; border:2px solid #98c379; width:160px; height:160px; top:30px; left:30px; border-radius:50%; display:flex; justify-content:center; padding-top:10px; color:#98c379; font-weight:bold;">ML</div>
                    <div style="position:absolute; border:2px solid #e06c75; width:90px; height:90px; top:65px; left:65px; border-radius:50%; display:flex; justify-content:center; align-items:center; color:#e06c75; font-weight:bold;">DL</div>
                </div>`;
            } else if (type === 'pca') {
                html += `
                <div class="scatter-box">
                    <div class="axis-label" style="bottom:-20px; width:100%; text-align:center;">PC1 (72.9%)</div>
                    <div class="axis-label" style="left:-30px; top:40%; transform:rotate(-90deg);">PC2 (22.8%)</div>
                    ${generateDots(25, '#e06c75')} ${generateDots(25, '#61afef', '30px')}
                    <div style="position:absolute; width:80px; height:2px; background:#333; top:50%; left:50%; transform:rotate(-20deg);"></div>
                    <div style="position:absolute; width:60px; height:2px; background:#333; top:50%; left:50%; transform:rotate(60deg);"></div>
                </div>`;
            } else if (type === 'umap') {
                html += `
                <div class="scatter-box" style="border:none;">
                    ${generateDots(30, '#98c379', '-50px')}
                    ${generateDots(30, '#e06c75', '50px')}
                    ${generateDots(30, '#61afef', '0px')}
                    <div style="position:absolute; bottom:10px; right:10px; font-size:0.7rem; color:#666;">Islands Structure (Manifolds)</div>
                </div>`;
            } else if (type === 'dendro') {
                html += `
                <div class="dendro-box">
                    <div style="position:absolute; bottom:0; left:20%; width:1px; height:50px; background:#333;"></div>
                    <div style="position:absolute; bottom:0; left:30%; width:1px; height:50px; background:#333;"></div>
                    <div style="position:absolute; bottom:50px; left:20%; width:10%; height:1px; background:#333;"></div>
                    <div style="position:absolute; bottom:50px; left:25%; width:1px; height:30px; background:#333;"></div>
                    
                    <div style="position:absolute; bottom:0; left:60%; width:1px; height:80px; background:#333;"></div>
                    <div style="position:absolute; bottom:0; left:70%; width:1px; height:80px; background:#333;"></div>
                    <div style="position:absolute; bottom:80px; left:60%; width:10%; height:1px; background:#333;"></div>
                    <div style="position:absolute; bottom:80px; left:65%; width:1px; height:60px; background:#333;"></div>
                    
                    <div style="position:absolute; top:40px; left:25%; width:40%; height:1px; background:#333;"></div>
                    <div style="position:absolute; top:40px; left:45%; width:1px; height:20px; background:#333;"></div>
                    
                    <div style="position:absolute; top:60px; width:100%; height:1px; background:red; border-top:1px dashed red;"></div>
                </div>
                <div style="text-align:center; margin-top:5px; font-size:0.8rem;">hclust(method="ward.D2")</div>`;
            } else if (type === 'separation') { // LDA
                html += `
                <div class="scatter-box">
                     ${generateDots(20, '#e06c75', '-30px')}
                     ${generateDots(20, '#61afef', '40px')}
                     <div style="position:absolute; width:120%; height:2px; background:#333; top:50%; left:-10%; transform:rotate(45deg);"></div>
                     <div style="position:absolute; top:10px; right:10px; font-weight:bold; font-size:0.8rem;">LD1 vs LD2</div>
                </div>`;
            } else if (type === 'tree') {
                html += `
                <div style="position:relative; width:300px; height:250px;">
                    <div class="tree-node" style="top:10px; left:110px;">Gene_A < 2.5</div>
                    <div class="tree-line" style="top:40px; left:150px; height:30px;"></div>
                    
                    <div style="position:absolute; top:70px; left:50px; width:100px; height:1px; background:#333;"></div>
                    <div class="tree-line" style="top:70px; left:50px; height:20px;"></div>
                    <div class="tree-line" style="top:70px; left:250px; height:20px;"></div>
                    
                    <div class="tree-node" style="top:90px; left:10px; background:#e0f7fa;">Si</div>
                    <div class="tree-node" style="top:90px; left:210px;">Gene_B > 10</div>
                    
                    <div class="tree-line" style="top:120px; left:250px; height:30px;"></div>
                    <div style="position:absolute; top:150px; left:200px; width:100px; height:1px; background:#333;"></div>
                     <div class="tree-line" style="top:150px; left:200px; height:20px;"></div>
                    <div class="tree-line" style="top:150px; left:300px; height:20px;"></div>
                    
                    <div class="tree-node" style="top:170px; left:160px; background:#ffebee;">Clase 1</div>
                    <div class="tree-node" style="top:170px; left:260px; background:#e8f5e9;">Clase 2</div>
                </div>`;
            } else if (type === 'rf_imp') {
                html += `
                <div class="bar-chart">
                    ${makeBar('TP53_mut', 95)} ${makeBar('Age', 80)} ${makeBar('BMI_Index', 60)} 
                    ${makeBar('Blood_Press', 45)} ${makeBar('Gene_BRCA', 30)}
                    <div style="font-size:0.75rem; text-align:center; margin-top:10px; color:#666;">Relative Influence (Importance)</div>
                </div>`;
            }

            area.innerHTML = html;
        }

        // Helpers
        function generateDots(n, color, offset='0px') {
            let html = '';
            for(let i=0; i<n; i++) {
                let t = Math.random()*70 + 15;
                let l = Math.random()*70 + 15;
                if(offset !== '0px') { l += parseInt(offset); t += parseInt(offset)/2; }
                html += `<div class="dot" style="top:${t}%; left:${l}%; background:${color};"></div>`;
            }
            return html;
        }

        function makeBar(label, width) {
            return `
            <div class="bar-row">
                <div class="bar-label">${label}</div>
                <div class="bar-track"><div class="bar-fill" style="width:${width}%;"></div></div>
            </div>`;
        }

        // Init
        window.onload = loadNav;