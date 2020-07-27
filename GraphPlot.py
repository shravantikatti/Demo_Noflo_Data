import matplotlib.pyplot as plt
import pandas as pd
import sys
import io
data_string = sys.argv[1]
data = io.StringIO(data_string)
df = pd.read_csv(data, sep=",")

df.plot(kind='bar',x='quantity',y='unit price',color='red')
plt.show()

