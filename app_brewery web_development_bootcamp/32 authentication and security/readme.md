
# Authentication and security

## notes

- Work directory: [secrets_app](../secrets_app/)
- [mongoose plugins](https://mongoosejs.com/docs/plugins.html)
- [mongoose-encryption](https://www.npmjs.com/package/mongoose-encryption) encryption and authentication package for mongoose documents
- [md5](https://www.npmjs.com/package/md5) hashing function
- [bcrypt](https://www.npmjs.com/package/bcrypt) hashing function

## introduction

This module will cover different levels of security, from simple logins, creating the account, adding users to the database by saving the credentials to o'auth and social logins, hashing, cookies, encrypting passwords.... Building the authentication system from the bottom, learning the fundamentals and building upon. I am really excited for this one since cyber security was always something i wanted to learn.

I will try to replicate the functionality of a [whisper.sh](https://whisper.sh). With simple and only the basic features, that way we can focus on learning the security.

### encryption

To distinguish individual users of our web app we need some sort of authentication mechanism, it is mostly a combination of username and password being stored in a database. How can we secure it? First step is some sort of encryption. In cryptography, encryption is the process of encoding information to make it unreadable to anyone without a proper key. The process converts the original information, known as plaintext, into an alternative form known as ciphertext. There are different types of encryption algorithms and techniques, including symmetric encryption, where same key is used for both encryption and decryption. Another type is asymmetric encryption, which utilizes a pair of keys: a public key to encrypt the information and a private key to decrypt.

Encryption is commonly used for securing sensitive data during transmission or storage, such as login credentials and authentication, credit card information, and personal data. In some cases there is also a regulatory compliance. Some of the encryption methods used on web include `AES (Advanced Encryption Standard)`, `RSA (Rivest-Shamir-Adleman)`, and `SSL/TLS (Secure Sockets Layer/Transport Layer Security)`....

### hashing

While encryption is a two way process where we can decrypt the encrypted value and get the original input back. Hashing goes only one way and we cannot restore the original input from the hash value. Hashing is like a digital signature or a footprint, hashing a single word will return a string of same length as a hash of entire book. It is commonly used for data integrity checks and verification, instead of password storage we will generate hash value as identifier. If input data is only slightly changed it's hash value will be completely different.

Different hashing functions use different algorithms to produce the hash value and not all are equally secure. `MD5 (Message Digest Algorithm 5)`, `SHA-1 (Secure Hash Algorithm 1)`, `SHA-256, SHA-384, SHA-512`, `Blake2`, `Whirlpool`, `bcrypt`...

What makes a hashing function less secure is time it takes to generate the hash value. Vulnerabilities can allow attackers to deduce or guess the original input through various means. If attacker can generate huge list of hashes in a single second than all it takes is large enough dictionary of words to guess the password. For simple algorithms like MD5 there are easily available prebuilt hash tables (`rainbow tables`) with hash values for most common passwords.

With the introduction of `bcrypt` hashing algorithm we can set the `work factor` or `input cost` value (how fast or slow it will be to generate hash). It will also prepend a random `salt` string to prevent hash collision and increase resistance to brute force and dictionary attacks

### passwords, salt and pepper

If we add random salt to every password and than generate the hash we can ensure that no hash is the same, even if we have users with same passwords we will still store different hash values. It is important that salt value is randomly generated for each user, otherwise it loses it's purpose. Salt string can be safely stored in a database, together with each username and hash output. It is used to slow down the attacker, prevent attacks with `rainbow tables (pregenerated list of hashes)` and hash collision by ensuring no hash values are same. If salting is not enough there is also an option to add some pepper.

`Pepper` is usually a very short and reusable string of characters, can be even one letter. It is globally applied to all passwords, it is should stay secret and not stored in a database. The process goes like this:

When user registers, server creates random salt string, prepends the salt to the password and creates the hash value out of it. Both the hash and a salt are stored in a database, there is no passwords, only hash values and salt string used to create that hash. When users wants to login, server pulls the salt from the database, prepends it to the password and creates a hash. If there is a match user can login. Server stores and compares only hash values, no need to store passwords. Now back to pepper. Since `pepper` is not stored in a database, server must do the extra work to cycle through different combinations of salt and pepper when creating the hash. When and if match is found user can login.

Another added measure can be a number of `salting rounds`. Every time we generate the hash using plaintext password and a salt as an input, we will repeat the process but this time input will be hash value from previous step prepended with the same salt string. Legit users will take a bit longer to compare and generate the hash but potential attacker will have to waste exponentially more time. With rising power of computer processors we can just increase the number of `salting rounds` instead of changing the hashing function.

## read more

- [mongoose plugins](https://mongoosejs.com/docs/plugins.html)
- [youtube.com/video](https://www.youtube.com/watch?v=G2_Q9FoD-oQ) "Enigma Machine" by Numberphile
- [youtube.com/video](https://www.youtube.com/watch?v=V4V2bpZlqx8) "Flaw in the Enigma code" by Numberphile
- [youtube.com/video](https://www.youtube.com/watch?v=GI790E1JMgw) "Hashing vs. Encryption differences" by Professor Sluiter
- [youtube.com/video](https://www.youtube.com/watch?v=aXHmUHPXwb4) "Adding Salt to Hashing: A Better Way to Store Passwords" by OktaDev
- [security.stackexchange/thread](https://security.stackexchange.com/questions/379/what-are-rainbow-tables-and-how-are-they-used) "What are rainbow tables and how to use them"
- "The Code Book - the secret history of codes and code breaking" by Simon Singh
- [cryptii.com](https://cryptii.com/) encrypt/decrypt text using different methods

## demo credentials
