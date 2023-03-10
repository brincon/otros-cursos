from persona import Persona

class Vendedor(Persona):
    def __init__(self, nombre, telefono, correo, documento, objetivoVentas, identificacionEmpresarial):
        super().__init__(nombre, telefono, correo, documento)
        self.objetivoVentas = objetivoVentas
        self.identificacionEmpresarial = identificacionEmpresarial
        self.acumuladoVentas = 0

    def imprimirNombre(self):
        print(self.nombre)
    
    def acumular(self, monto):
        self.acumuladoVentas = self.acumuladoVentas + monto

    def revisarObjetivo(self):
        if self.acumuladoVentas >= self.objetivoVentas:
            print("El objetivo se ha v¡cumplido")
        else:
            print(f"Aun no se ha cumplido el objetivo. Faltan {self.objetivoVentas - self.acumuladoVentas}")

        
        print(f"Objetivo: {self.objetivoVentas}")
        print(f"Acumulado: {self.acumuladoVentas}")
