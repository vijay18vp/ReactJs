// prevent default browser behaviouur 

function LinkComponent() {
    const handleClick = (e) => {
        e.preventDefault();
        alert("link clicked , but Not navigated ! "); 
    }
    return(
        <div>
          <a href="https://google.com" onClick={handleClick}> Google </a>
        </div>
    );
};
export default LinkComponent;