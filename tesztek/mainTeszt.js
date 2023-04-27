QUnit.module("adatok megjelenitése", function () {
    QUnit.test("1 termék esetén", function (assert) {
        assert.equal(osszealit([{
            nev: "kaposzta",
            kor: 12,
            fajta: "kuvasz"
        }]), "<tr><td>kaposzta</td><td>12</td><td>kuvasz</td><td><button class='btn text-danger' type='button' id='x0'>X</button></tr>");
    });
    QUnit.test("Üres lista esetén", function (assert){
        assert.equal(osszealit([{
        }]), )
    });
    QUnit.test("n termék esetén", function (assert){
        assert.equal(osszealit([{
            nev: "kaposzta",
            kor: 12,
            fajta: "kuvasz"
        },{
            nev: "tej",
            kor: 2,
            fajta: "xd"
        }]), "<tr><td>kaposzta</td><td>12</td><td>kuvasz</td><td><button class='btn text-danger' type='button' id='x0'>X</button></tr><tr><td>tej</td><td>2</td><td>xd</td><td><button class='btn text-danger' type='button' id='x1'>X</button></tr>")
    })
});

QUnit.module("Új adat rögzitése", function(){
    QUnit.test("Megjelenik az uj elem hozzáadása?", function (assert){
        assert.ok(section, "megjelenik")
    });
    QUnit.test("Megjelenik a 'küld' gomb?", function(assert){
        assert.ok("#kuld", "megjelenik")
    })
})