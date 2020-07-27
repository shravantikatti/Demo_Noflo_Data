import pandas as pd
import sys
import io

data_string = sys.argv[1]
data = io.StringIO(data_string)
df = pd.read_csv(data, sep =",") 

print(df.sort_values(by=['ext price']).to_csv(index=False))