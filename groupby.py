import pandas as pd
import sys
import io

data_string = sys.argv[1]
data = io.StringIO(data_string)
df = pd.read_csv(data, sep =",") 



grouped_df = df.groupby('order')
# print(grouped_df.first())

print("\n\nGrouped Data based on Order ID : ")
for name,group in grouped_df:
   print(name)
   print(group)

print("\n")