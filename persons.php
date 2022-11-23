<?php

class Person
{
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother = null, $father = null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }

  function sayHi($name)
  {
    return "Hi $name, I'm " . $this->name;
  }
  function setHp($hp)
  {
    if ($this->hp + $hp >= 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp()
  {
    return $this->hp;
  }
  function getName()
  {
    return $this->name;
  }
  function getMother()
  {
    return $this->mother;
  }
  function getFather()
  {
    return $this->father;
  }
  function getInfo()
  {
    return "
    <h2>A few words about myself.</h2><br>" . "My name is: " . $this->getName() . ", <br>my father is: " . $this->getFather()->getName() . ", <br>my mother is: " . $this->getMother()->getName() . ", <br>my grandfather on the father's side is: " . $this->getFather()->getFather()->getName() . ", <br>my grandmother on the father's side is: " . $this->getFather()->getMother()->getName() . ", <br>my grandfather on the mother's side is: " . $this->getMother()->getFather()->getName() . ", <br>my grandmother on the mother's side is: " . $this->getMother()->getMother()->getName() . ".";
  }
}

$igor = new Person("Igor", "Petrov", 78);
$nataly = new Person("Natalya", "Petrova", 65);
$michael = new Person("Michael", "Ivanov", 65);
$svetlana = new Person("Svetlana", "Ivanova", 62);
$alex = new Person("Alex", "Ivanov", 42, $svetlana, $michael);
$olga = new Person("Olga", "Ivanova", 42, $nataly, $igor);
$valera = new Person("Valera", "Ivanov", 15, $olga, $alex);

echo $valera->getInfo();

// $medKit = 50;
// $alex->hp = $alex->hp - 30;
// $alex->setHp(-30);
// echo $alex->getHp() . "<br>";
// // $alex->hp = $alex->hp + $medKit;
// $alex->setHp($medKit);
// echo $alex->getHp();
// // echo $alex->hp . "<br>";




// echo $alex->sayHi($igor->name);
