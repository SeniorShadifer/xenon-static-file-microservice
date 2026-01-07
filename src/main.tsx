import ReactDOM from "react-dom/client";
import React from "react";
import pino from "pino";

import App from "./App.tsx";

export const logger = pino({
  level: "trace",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

logger.info("Logger initialized.");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);

/*
import { ml_kem768 } from '@noble/post-quantum/ml-kem.js';
import { ml_dsa44 } from '@noble/post-quantum/ml-dsa.js';
import { sha3_256 } from "@noble/hashes/sha3.js"
import { gcm } from '@noble/ciphers/aes.js';

const { publicKey: encryptionPK, secretKey: encryptionSK } = ml_kem768.keygen();

const { cipherText, sharedSecret } = ml_kem768.encapsulate(encryptionPK);

const derivedEncryptionKey = sha3_256(sharedSecret).slice(0, 32);

const data = "Hello, world!"
const iv = crypto.getRandomValues(new Uint8Array(16));
const encryptor = gcm(derivedEncryptionKey, iv);
const dataBytes = new TextEncoder().encode(data);
const encryptedData = encryptor.encrypt(dataBytes);

const decapsulatedSecret = ml_kem768.decapsulate(cipherText, encryptionSK);
const derivedDecryptionKey = sha3_256(decapsulatedSecret).slice(0, 32);
const decryptor = gcm(derivedDecryptionKey, iv);
const decryptedBytes = decryptor.decrypt(encryptedData);

const { publicKey: signPK, secretKey: signSK } = ml_dsa44.keygen();
const message = new TextEncoder().encode('Секретное сообщение');
const signature = ml_dsa44.sign(message, signSK);
const isCorrectSignatureValid = ml_dsa44.verify(signature, message, signPK);
message[0] = 228
const isIncorrectSignatureValid = ml_dsa44.verify(signature, message, signPK);


console.log("Cipher text: ", cipherText, " shared secret: ", sharedSecret, " decapsulated secret: ", decapsulatedSecret)
console.log("Decrypted data: ", new TextDecoder().decode(decryptedBytes))
console.log("Correct signature validity: ", isCorrectSignatureValid, " incorrect signature validity: ", isIncorrectSignatureValid)
*/
