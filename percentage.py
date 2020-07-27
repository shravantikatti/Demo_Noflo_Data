import pandas as pd 
import sys
import io
data_string = sys.argv[1]
data = io.StringIO(data_string)
df=pd.read_csv(data, sep=",")

percent_of_order=(df['ext price'] / df['unit price']) *100
percent_list=percent_of_order.tolist()

df['Percent_of_order'] = percent_list
print((df.head(100)).to_csv(index=False))