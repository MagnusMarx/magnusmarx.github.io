var map = {
    title: "super dodo lane",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.00007000000000000001, 0.00007000000000000001, -4.99993], [0, 0, 0], [2, 2, 38], "1", 0, 0, 0.6, false, false);
        a.p([0.00014000000000000001, 0.00014000000000000001, -29.999859999999998], [0, 0, 0], [20, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([1.5002099999999998, 0.00021, -27.999789999999997], [0, 0, 0], [1, 20, 16], "1", 0, 0, 0.6, false, false);
        a.p([5.00028, 0.00028000000000000003, -4.99972], [0, 0, 0], [2, 2, 40], "1", 0, 0, 0.6, false, false);
        a.p([15.000350000000001, 0.00035000000000000005, 5.00035], [0.79, 0, 0], [2, 2, 30], "1", 0, 0, 0.6, false, false);
        a.p([4.00042, 0.00042, 15.000419999999998], [-0.79, 0, 0], [2, 2, 3], "1", 0, 0, 0.6, false, false);
        a.p([15.00049, 0.00049, 16.00049], [0.35, 0, 0], [30, 2, 2], "1", 0, 0, 0.6, false, false);
        a.p([35, 0, 20], [-0.7, 0, 0], [20, 2, 20], "1", 0, 0, 0.6, false, false);
        a.p([33.00007, 0.00007000000000000001, 18.00007], [-0.7, 0, 0], [16, 20, 1], "1", 0, 0, 0.6, false, false);
        a.e([0.00014000000000000001, 0.00014000000000000001, 20.00014]);
    },
    post: function() {
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.00007000000000000001, 0.00007000000000000001, -4.99993], [0, 0, 0], [2, 2, 38]);
        a.re('P1', [0.00014000000000000001, 0.00014000000000000001, -29.999859999999998], [0, 0, 0], [20, 2, 20]);
        a.re('P2', [1.5002099999999998, 0.00021, -27.999789999999997], [0, 0, 0], [1, 20, 16]);
        a.re('P3', [5.00028, 0.00028000000000000003, -4.99972], [0, 0, 0], [2, 2, 40]);
        a.re('P4', [15.000350000000001, 0.00035000000000000005, 5.00035], [0.79, 0, 0], [2, 2, 30]);
        a.re('P5', [4.00042, 0.00042, 15.000419999999998], [-0.79, 0, 0], [2, 2, 3]);
        a.re('P6', [15.00049, 0.00049, 16.00049], [0.35, 0, 0], [30, 2, 2]);
        a.re('P7', [35, 0, 20], [-0.7, 0, 0], [20, 2, 20]);
        a.re('P8', [33.00007, 0.00007000000000000001, 18.00007], [-0.7, 0, 0], [16, 20, 1]);
        a.re('E0', [0.00014000000000000001, 0.00014000000000000001, 20.00014], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
