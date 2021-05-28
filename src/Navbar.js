import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    padding: 20px;
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;

    h1 {
        color: #f1356d;
    };

    a {
        margin-left: 16px;
        text-decoration: none;
        padding: 6px;
    };

    a:hover {
        color: #f1356d;
    };
`;

const LinksWrapper = styled.div`
    margin-left: auto;
`;


const Navbar = () => {

    return (
        <NavbarWrapper>
            <h1>The Dojo Blog</h1>
            <LinksWrapper>
                <a href='/'>Home</a>
                <a href='/create'>New Blog</a>

            </LinksWrapper>

        </NavbarWrapper>
    );
}

export default Navbar;