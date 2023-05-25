import Statisztika from "../js/Statisztika.js";

QUnit.module('nemszerintSzama', function () {
  const lista = [
    { nev: "Béla", kor: 56, nem: "ffi" },
    { nev: "Jenő", kor: 16, nem: "ffi" },
    { nev: "Rózsa", kor: 33, nem: "nő" }
  ]
  const stat = new Statisztika(lista)

  QUnit.test('ferfiSzam', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "ffi" },
      { nev: "Rózsa", kor: 33, nem: "nő" }
    ]
    assert.equal(stat.nemszerintSzama("ffi"), 2)
  });
  QUnit.test('noSzam', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "ffi" },
      { nev: "Rózsa", kor: 33, nem: "nő" }
    ]
    assert.equal(stat.nemszerintSzama("nő"), 1)
  });
  QUnit.test('vanEgyeb', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "egyeb" },
      { nev: "Jenő", kor: 16, nem: "ffi" },
      { nev: "Rózsa", kor: 33, nem: "nő" }
    ]
    assert.equal(stat.nemszerintSzama("egyeb"), 1)
  });

  QUnit.test('mindenEgyeb', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "egyeb" },
      { nev: "Jenő", kor: 16, nem: "egyeb" },
      { nev: "Rózsa", kor: 33, nem: "egyeb" }
    ]
    assert.equal(stat.nemszerintSzama("egyeb"), 3)
  });
  QUnit.test('mindenEgyeb', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "egyeb" },
      { nev: "Jenő", kor: 16, nem: "egyeb" },
      { nev: "Rózsa", kor: 33, nem: "egyeb" }
    ]
    assert.equal(stat.nemszerintSzama("ffi"), 0)
  });

  QUnit.test('mindenEgyeb', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "egyeb" },
      { nev: "Jenő", kor: 16, nem: "egyeb" },
      { nev: "Rózsa", kor: 33, nem: "egyeb" }
    ]
    assert.equal(stat.nemszerintSzama("nő"), 0)
  });

  QUnit.test('mindenFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "ffi" },
      { nev: "Rózsa", kor: 33, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintSzama("ffi"), 3)
  });
  QUnit.test('mindenFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "ffi" },
      { nev: "Rózsa", kor: 33, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintSzama("nő"), 0)
  });
  QUnit.test('mindenFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "ffi" },
      { nev: "Rózsa", kor: 33, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintSzama("egyeb"), 0)
  });
  QUnit.test('mindenNo', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "nő" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "nő" }
    ]
    assert.equal(stat.nemszerintSzama("nő"), 3)
  });
  QUnit.test('mindenNo', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "nő" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "nő" }
    ]
    assert.equal(stat.nemszerintSzama("ffi"), 0)
  });
  QUnit.test('mindenNo', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "nő" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "nő" }
    ]
    assert.equal(stat.nemszerintSzama("egyeb"), 0)
  });
  QUnit.test('ures', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "" },
      { nev: "Jenő", kor: 16, nem: "" },
      { nev: "Rózsa", kor: 33, nem: "" }
    ]
    assert.equal(stat.nemszerintSzama("ffi"), 0)
  });

  QUnit.test('ures', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "" },
      { nev: "Jenő", kor: 16, nem: "" },
      { nev: "Rózsa", kor: 33, nem: "" }
    ]
    assert.equal(stat.nemszerintSzama("nő"), 0)
  });

  QUnit.test('ures', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "" },
      { nev: "Jenő", kor: 16, nem: "" },
      { nev: "Rózsa", kor: 33, nem: "" }
    ]
    assert.equal(stat.nemszerintSzama("egyeb"), 0)
  });

  QUnit.test('vanUres', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "" },
      { nev: "Rózsa", kor: 33, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintSzama("nő"), 0)
  });

  QUnit.test('vanUres', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "" },
      { nev: "Rózsa", kor: 33, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintSzama("ffi"), 2)
  });

  QUnit.test('vanUres', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "" },
      { nev: "Rózsa", kor: 33, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintSzama("egyeb"), 0)
  });
  QUnit.test('vanUres', function (assert) {
    stat.lista = []
    assert.equal(stat.nemszerintSzama(""), 0)
  });
});

QUnit.module('atlagEletkor', function () {


  const lista = [
    { nev: "Béla", kor: 56, nem: "ffi" },
    { nev: "Jenő", kor: 16, nem: "ffi" },
    { nev: "Rózsa", kor: 33, nem: "nő" }
  ];
  const stat = new Statisztika(lista);

  QUnit.test('atlag', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "ffi" }
    ]
    assert.equal(stat.atlagEletkor(), 35)
  });
  QUnit.test('mindenNulla', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 0, nem: "ffi" },
      { nev: "Jenő", kor: 0, nem: "nő" },
      { nev: "Rózsa", kor: 0, nem: "ffi" }
    ]
    assert.equal(stat.atlagEletkor(), 0)
  });

  QUnit.test('vanNulla', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 10, nem: "ffi" },
      { nev: "Jenő", kor: 10, nem: "nő" },
      { nev: "Rózsa", kor: 0, nem: "ffi" }
    ]
    assert.equal(stat.atlagEletkor(), 6.666666666666667)
  });

  QUnit.test('vanMinusz', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: -33, nem: "ffi" }
    ]
    assert.equal(stat.atlagEletkor(), 13)
  });

  QUnit.test('mindenMinusz', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: -56, nem: "ffi" },
      { nev: "Jenő", kor: -16, nem: "nő" },
      { nev: "Rózsa", kor: -33, nem: "ffi" }
    ]
    assert.equal(stat.atlagEletkor(), -35)
  });

  QUnit.test('vanNull', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: null, nem: "ffi" },
      { nev: "Jenő", kor: 10, nem: "nő" },
      { nev: "Rózsa", kor: 10, nem: "ffi" }
    ]
    assert.equal(stat.atlagEletkor(), 6.666666666666667)
  });

  QUnit.test('mindenNull', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: null, nem: "ffi" },
      { nev: "Jenő", kor: null, nem: "nő" },
      { nev: "Rózsa", kor: null, nem: "ffi" }
    ]
    assert.equal(stat.atlagEletkor(), 0)
  });

  QUnit.test('uresLista', function (assert) {
    stat.lista = []
    assert.equal(stat.atlagEletkor(), 0)
  });

});

QUnit.module('nemszerintAtlagEletkora', function () {
  const lista = [
    { nev: "Béla", kor: 56, nem: "ffi" },
    { nev: "Jenő", kor: 16, nem: "ffi" },
    { nev: "Rózsa", kor: 33, nem: "nő" }
  ]
  const stat = new Statisztika(lista)

  QUnit.test('atlagFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "ffi" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("ffi"), 44.5)
  });

  QUnit.test('mindenNullaFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 0, nem: "ffi" },
      { nev: "Jenő", kor: 0, nem: "nő" },
      { nev: "Rózsa", kor: 0, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("ffi"), 0)
  });

  QUnit.test('vanNullaFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 0, nem: "ffi" },
      { nev: "Jenő", kor: 43, nem: "nő" },
      { nev: "Rózsa", kor: 31, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("ffi"), 15.5)
  });

  QUnit.test('mindenMinuszFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: -10, nem: "ffi" },
      { nev: "Jenő", kor: -43, nem: "nő" },
      { nev: "Rózsa", kor: -31, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("ffi"), -20.5)
  });

  QUnit.test('vanMinuszFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: -10, nem: "ffi" },
      { nev: "Jenő", kor: -43, nem: "nő" },
      { nev: "Rózsa", kor: 31, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("ffi"), 10.5)
  });

  QUnit.test('mindenNullFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: null, nem: "ffi" },
      { nev: "Jenő", kor: null, nem: "nő" },
      { nev: "Rózsa", kor: null, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("ffi"), 0)
  });

  QUnit.test('vanNullFerfi', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: null, nem: "ffi" },
      { nev: "Jenő", kor: null, nem: "nő" },
      { nev: "Rózsa", kor: 25, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("ffi"), 12.5)
  });

  QUnit.test('uresFerfi', function (assert) {
    stat.lista = []
    assert.equal(stat.nemszerintAtlagEletkora("ffi"), 0)
  });

  QUnit.test('atlagNő', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 56, nem: "nő" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("nő"), 36)
  });

  QUnit.test('mindenNullaNő', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 0, nem: "nő" },
      { nev: "Jenő", kor: 0, nem: "nő" },
      { nev: "Rózsa", kor: 0, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("nő"), 0)
  });

  QUnit.test('vanNullaNő', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 0, nem: "nő" },
      { nev: "Jenő", kor: 43, nem: "nő" },
      { nev: "Rózsa", kor: 31, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("nő"), 21.5)
  });

  QUnit.test('mindenMinuszNő', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: -10, nem: "nő" },
      { nev: "Jenő", kor: -43, nem: "nő" },
      { nev: "Rózsa", kor: -31, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("nő"), -26.5)
  });

  QUnit.test('vanMinuszNő', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: -10, nem: "nő" },
      { nev: "Jenő", kor: 43, nem: "nő" },
      { nev: "Rózsa", kor: 31, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("nő"), 16.5)
  });


  QUnit.test('mindenNullNő', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: null, nem: "nő" },
      { nev: "Jenő", kor: null, nem: "nő" },
      { nev: "Rózsa", kor: null, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("nő"), 0)
  });

  QUnit.test('vanNullNő', function (assert) {
    stat.lista = [
      { nev: "Béla", kor: 65, nem: "nő" },
      { nev: "Jenő", kor: null, nem: "nő" },
      { nev: "Rózsa", kor: 25, nem: "ffi" }
    ]
    assert.equal(stat.nemszerintAtlagEletkora("nő"), 32.5)
  });

  QUnit.test('uresNő', function (assert) {
    stat.lista = []
    assert.equal(stat.nemszerintAtlagEletkora("nő"), 0)
  });
});