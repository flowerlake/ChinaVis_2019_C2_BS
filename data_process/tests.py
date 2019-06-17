from django.test import TestCase
import numpy as np
import pandas as pd
# Create your tests here.

test = pd.read_csv("../../source_data/gps_wgs_time_road.csv")

test.drop(['Unnamed: 0'],axis=1,inplace=True)
test.to_csv("../../source_data/gps_wgs_time_road.csv",index=False)
print(test.head())