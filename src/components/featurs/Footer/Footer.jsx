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
                <a href="https://www.facebook.com/">facbook<i class="fa fa-facebook-square"></i>|</a>
                <a href="https://www.linkedin.com/feed/">Linkdin<i class="fa fa-linkedin-square" ></i>|</a>
                <a href=" https://github.com/kineretasiyahan" >Git<i class="fa fa-github-square"></i></a>
            </footer>
        </IconStyle>
    </div>)
}

// function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
//   }
  
//   function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
//   }
// return (

// <div class="w3-sidebar w3-bar-block w3-border-right" style={{display:"none"}} id="mySidebar">
// <button onclick={w3_close} class="w3-bar-item w3-large">Close &times;</button>
// <a href="#" class="w3-bar-item w3-button">Link 1</a>
// <a href="#" class="w3-bar-item w3-button">Link 2</a>
// <a href="#" class="w3-bar-item w3-button">Link 3</a>

// <div class="w3-teal">
// <button class="w3-button w3-teal w3-xlarge" onclick="w3_open()">☰</button>
// <div class="w3-container">
// </div>
// </div> 
// </div>)