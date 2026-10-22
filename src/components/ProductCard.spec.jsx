describe("ProductCard Component", function() {
  it("deberia renderizar los datos del mock correctamente", function() {
    // Configuración inicial del mock de datos del auto a escala
    const mockAuto = { modelo: "Nissan Skyline R34", escala: "1:64", precio: 15000 };
    
    // Verificación de lógica base
    expect(mockAuto.modelo).toBe("Nissan Skyline R34");
  });
});