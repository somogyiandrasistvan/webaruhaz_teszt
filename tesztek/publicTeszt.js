QUnit.module("adatok megjelenitése", function () {
  QUnit.test("létezik-e az oldal?", function (assert) {
    assert.ok(init, "init lézezik");
    assert.ok(osszealit, "osszealit lézezik");
    assert.ok(nav, "nav lézezik");
  });


});

QUnit.module("Egy termék megjelenitése és léptetése", function () {
  QUnit.test("rálehet-e kattintani a mutatra?", function(assert){
    assert.ok("#mutat", "A 'mutat' megjelenik");
    assert.ok(typeof (mutat) === "function", "egy metudos");
    assert.ok("#gomb3", "bezér gomb megjelenik");
  });
});