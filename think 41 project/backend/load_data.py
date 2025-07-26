import pandas as pd
from sqlalchemy import create_engine

engine = create_engine("postgresql://user:password@localhost/ecommerce_db")

def load_csv_to_db(file_path, table_name):
    df = pd.read_csv(file_path)
    df.to_sql(table_name, con=engine, if_exists='replace', index=False)
    print(f"Loaded {file_path} into {table_name}")

# Example usage:
# load_csv_to_db("data/products.csv", "products")
# load_csv_to_db("data/orders.csv", "orders")