import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

def analyze_and_visualize():
    """
    Performs an exploratory data analysis on the gene expression dataset
    and generates a heatmap.
    """
    # Construct the path to the CSV file relative to the script's location
    script_dir = os.path.dirname(__file__)
    csv_path = os.path.join(script_dir, 'gene_expression.csv')
    
    # Read the dataset
    try:
        data = pd.read_csv(csv_path)
    except FileNotFoundError:
        print(f"Error: 'gene_expression.csv' not found at {csv_path}")
        return

    # Set Gene as the index
    data = data.set_index('Gene')

    # Create a heatmap
    plt.figure(figsize=(10, 6))
    sns.heatmap(data, annot=True, cmap='viridis', linewidths=.5)
    
    # Add titles and labels for clarity
    plt.title('Heatmap de Expresión Génica', fontsize=16)
    plt.xlabel('Muestras', fontsize=12)
    plt.ylabel('Genes', fontsize=12)
    plt.xticks(rotation=45)
    plt.yticks(rotation=0)
    
    # Ensure the plot is laid out nicely
    plt.tight_layout()

    # Save the plot to the assets/images directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_dir = os.path.join(script_dir, '..', 'assets', 'images')
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    output_path = os.path.join(output_dir, 'heatmap_expression.png')
    plt.savefig(output_path)
    
    print(f"Heatmap guardado en: {output_path}")

if __name__ == '__main__':
    analyze_and_visualize()
