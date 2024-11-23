from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/api/visitantes', methods=['GET'])
def obtener_visitantes():
    # Cargar los datos desde el archivo CSV
    df = pd.read_csv('/path/to/visitante.csv')

    # Asegurarse de que la columna de año sea de tipo numérico
    df['Año'] = pd.to_numeric(df['Año'], errors='coerce')

    # Asegurar que 'total' sea numérico
    df['total'] = pd.to_numeric(df['total'], errors='coerce')

    # Agrupar por año y país, sumar los totales y obtener los países con más visitas
    top_countries = df.groupby(['Año', 'País'])['total'].sum().reset_index()

    # Encontrar los 5 países con más visitas
    top_countries = top_countries.groupby('País')['total'].sum().nlargest(5).index.tolist()

    # Filtrar el DataFrame para incluir solo los países principales
    filtered_df = df[df['País'].isin(top_countries)]

    # Agrupar por año y país, sumar los totales
    visitantes_por_año_pais = filtered_df.groupby(['Año', 'País'])['total'].sum().reset_index()

    # Convertir a formato JSON
    result = visitantes_por_año_pais.to_dict(orient='records')

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)


## mi-carnaval-s3bucket
## arn:aws:s3:::mi-carnaval-s3bucket
