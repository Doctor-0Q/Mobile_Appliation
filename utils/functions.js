export function obscureEmail(email) {
    const [firstPart, secondPart] = email.split('@');

    const obscuredFirstPart = firstPart.slice(0, 2) + '*'.repeat(firstPart.length - 4) + firstPart.slice(-2);

    return obscuredFirstPart + '@' + secondPart;
}