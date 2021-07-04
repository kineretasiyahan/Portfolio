import styled from 'styled-components';
export default function Footer() {
    const IconStyle = styled.a`
    display:flex;
    justify-content:space-around;
    font-size:20px;
    `
    return (<div>
        <IconStyle>
            <footer class="footer">
                <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i>  |  </a>
                <a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin"></i>  |  </a>
                <a href=" https://github.com/kineretasiyahan" ><i class="fab fa-github">  </i></a>
                <h2>@2021 Tec Career, Inc.</h2>
            </footer>
        </IconStyle>
    </div>)
}

