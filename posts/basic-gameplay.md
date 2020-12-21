---
title: 'Unity - Basic Gameplay'
date: '2020-11-17'
---

# Unit 2 - Basic Gameplay

# Lesson 2.1 - Player Positioning

Basicamente usei o transform.position para ver onde o player está e se estiver fora da área que era pra ele estar, seta o position com um novo Vector3.

```csharp
if (transform.position.x < -xRange)
{
  transform.position = new Vector3(-xRange, transform.position.y, transform.position.z);
}
```

# Lesson 2.2 - Food Flight

Basicamente aprendi o método Destroy, que podemos passar um object como argumento pra ser destruído. O gameObject é o objeto em que o script está sendo rodado.

Útil para destruir objetos que saíram da tela:

```csharp
if (transform.position.z > topBound)
{
  Destroy(gameObject);
}
```

Também vi os prefabs, que são objetos pré fabricados, é só arrastar para alguma pasta do project.

Eles têm esses ícones azuis.

![Unit%202%20-%20Basic%20Gameplay%209a98382fc1d24705b1753a7510e4dab6/Untitled.png](Unit%202%20-%20Basic%20Gameplay%209a98382fc1d24705b1753a7510e4dab6/Untitled.png)

Podem ser úteis para ser instanciados pelo método Instantiate:

```csharp
Instantiate(projectilePrefab, transform.position, projectilePrefab.transform.rotation);
```

# Lesson 2.3 - Random Animal Stampede

Random.Range(inicio, fim) pega um numero aleatório incluindo o inicio e excluindo o fim.

Criei um array de objetos usando:

```csharp
public GameObject[] animalPrefabs;
```

# Lesson 2.4 - Collision Decisions

Imprimir:

```csharp
Debug.Log("Game Over");
```

OnTriggerEnter:

```csharp
private void OnTriggerEnter(Collider other)
{
  Destroy(gameObject);
  Destroy(other.gameObject);
}
```

Collider nos prefabs com double-click e adicionando Box Collider:

![Unit%202%20-%20Basic%20Gameplay%209a98382fc1d24705b1753a7510e4dab6/Untitled%201.png](Unit%202%20-%20Basic%20Gameplay%209a98382fc1d24705b1753a7510e4dab6/Untitled%201.png)

![Unit%202%20-%20Basic%20Gameplay%209a98382fc1d24705b1753a7510e4dab6/Untitled%202.png](Unit%202%20-%20Basic%20Gameplay%209a98382fc1d24705b1753a7510e4dab6/Untitled%202.png)
