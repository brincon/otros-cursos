num = 0
total = 0.0
while True :
    sval = input ('ingrese un numero : ')
    if sval == 'done' : 
        break
    try:
        fval = float (sval)
    except:
        print('Invalid input')
        continue 

    num = num +1
    total = total + fval

print ('Todo hecho')
print (total, num, total/num)

