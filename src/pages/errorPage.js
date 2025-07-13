export const showError=(message)=>{
    const errorDiv=document.getElementById('errorMessage');
    errorDiv.textContent=message;
    errorDiv.style.display='block';
}