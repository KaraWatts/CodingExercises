##How do you check this using only 1 dictionary? There is a way

def StringScramble(str1,str2):
  str1Dic = {}
  str2Dic = {}
  dictionarycheck = None


  #converts this list to a dictionary where the key is how often that letter occurred in the list
  for item in str2:
    if item in str2Dic:
      str2Dic[item] = str2Dic[item] + 1
    else:
      str2Dic[item] = 1
  print(str2Dic)

  #converts this list to a dictionary where the key is how often that letter occurred in the list
  for item in str1:
    if item in str1Dic:
      str1Dic[item] = str1Dic[item] + 1
    else:
      str1Dic[item] = 1
  print(str1Dic)

  #returns True if each value in str2Dic is less than its associated value in str1Dic
  for item in str2Dic:
    if str2Dic[item] > str1Dic[item]:
      return False
    else:
      dictionarycheck = True

  if dictionarycheck is True:
    return True
  # code goes here
  return False

# keep this function call here 
print(StringScramble(input(), input()))