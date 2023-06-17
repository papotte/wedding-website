describe('Check layout', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays the website name', () => {
        cy.get('h1').contains('Ross & Raquel');
    });
    it('renders the background', () => {
        cy.get('.hero.bg-banner').should('be.visible').should('have.css', 'background-image');
    });
});
