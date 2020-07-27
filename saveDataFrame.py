import pandas as pd
import sys
import io
string1 = sys.argv[1]
data1 = io.StringIO(string1)
df1 = pd.read_csv(data1, sep=",")

df1.to_csv('Dataframe.csv')
