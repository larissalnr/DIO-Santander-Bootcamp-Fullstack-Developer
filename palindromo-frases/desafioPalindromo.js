//Verificar se entrada eh palindromo no caso de mais de uma palavra

const isPalindrome = (text) => {
    const palindrome = text.split('')
    .reverse()
    .join('');
    return palindrome === text ? 'Palindrome confirmado' : 'Não eh um palindrome';
}

console.log(isPalindrome('amor a roma'));