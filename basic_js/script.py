import numpy as np

class GenericLayer:
  def __init__(self, input, output):
    self.input = input
    self.output = output


a = GenericLayer(1,2)
print(a.input)