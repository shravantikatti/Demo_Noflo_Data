import pandas as pd
import sys
import io
string1 = sys.argv[1]
string2 = sys.argv[2]
data1 = io.StringIO(string1)
data2 = io.StringIO(string2)
df1 = pd.read_csv(data1, sep=",")
df2 = pd.read_csv(data2, sep=",")


#Join statement for df1 and df2
percentt = df2["Percent_of_order"]
df1 = df1.join(percentt)

print((df1.head(100)).to_csv(index=False))
