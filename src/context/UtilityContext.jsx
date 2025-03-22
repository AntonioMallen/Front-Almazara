class Utility {
    static secretKey = parseInt(import.meta.env.VITE_SECRET_KEY_ENCRYPT_ID, 10);

    static toBase64(num) {
        const obfuscated = num ^ Utility.secretKey; // Usar Utility.secretKey
        return obfuscated.toString(36);
    }
  
    static fromBase64(obfuscated) {
        const obfuscatedNumber = parseInt(obfuscated, 36);
        return obfuscatedNumber ^ Utility.secretKey; // Usar Utility.secretKey
    }
}

export default Utility;