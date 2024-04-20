describe("Prueba de texto de bienvenida", () => {
	it("Verifica la existencia del texto de bienvenida", () => {
		cy.visit("http://localhost:3000/"); // Cambia "/"" por la URL de tu aplicación si es diferente
		cy.contains("¡Bienvenido a NutriScan!").should("exist");
	});
});
