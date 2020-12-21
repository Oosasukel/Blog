---
title: 'Unity - Sound and Effects'
date: '2020-11-18'
---

# Unit 3 - Sound and Effects

# Lesson 3.1 - Jump Force

Métodos GetComponent() para pegar um componente do GameObject

Physics.Gravity para acessar a gravidade

Rigidbody constraints para travar alguns eixos

Variável Rigidbody

Método OnCollisionEnter(Collision collision)

# Lesson 3.2 - Make the World Whiz By

Posso pegar o tamanho de um GameObject se colocar um BoxCollider nele.

```csharp
GetComponent<BoxCollider>().size.x
```

Posso pegar a referência de outro script sabendo o nome do GameObject que contém ele:

```csharp
playerControllerScript = GameObject.Find("Player").GetComponent<PlayerController>();
```

No atributo gameObject, existe o método CompareTag(), em que passo uma string com nome da tag que quero verificar se está naquele gameObject.

# Lesson 3.3 - Don't Just Stand There

Animator tem os parâmetros que posso utilizar pra fazer as transições de animações e também posso utilizar via código pra setar algum parâmetro:

```csharp
playerAnim.SetBool("Death_b", true);
playerAnim.SetInteger("DeathType_int", 1);
```

# Lesson 3.4 - Particles and Sound Effects

Temos que usar o AudioSource para emitir som (AudioClip) e AudioListener para ouvir o som.

```csharp
private AudioSource playerAudio;
public AudioClip jumpSound;

playerAudio = GetComponent<AudioSource>();

playerAudio.PlayOneShot(jumpSound, 1);
```

Podemos utilizar o ParticleSystem para mostrar partículas.

```csharp
public ParticleSystem explosionParticle;

explosionParticle.Play();
explosionParticle.Stop();
```
