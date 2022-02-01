var map = {
    title: "cone-elevator",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([0, -3.66988, -71.95]);
        a.p([0, -6.489940000000001, -31.42], [0, 0, 0], [4.22, 0.52, 8.82], 1, 0);
        a.p([0, 38.57018, -47.35], [0, 0, 0], [6.84, 1.8, 19.1], 3.0, 0);
        a.p([0, 40.73024, -56.16], [0, 0, 0], [6.84, 1.8, 19.1], 3.0, 0);
        a.p([0, -4.35, -19.63], [0, 0, 0], [2, 0.52, 8.82], 3.0, 0);
        a.p([0, -6.489940000000001, -25.67], [0, 0, 0], [2, 0.52, 8.82], 3.0, 0);
        a.p([0, -2.06988, -11.46], [0, 0, 0], [2, 0.52, 8.82], 3.0, 0);
        a.p([0, 0.00018, -3.05], [0, 0, 0], [2, 0.52, 8.82], 3.0, 0);
        a.p([0, -4.62976, -60.14], [0, 0, 0], [6.84, 1.8, 25.54], 3.0, 0);
        a.p([-2.6, 24.930300000000003, -52.5], [-1.57, 0, 0], [4.22, 60.3, 2], 3.0, 0);
        a.p([3.02, 24.93, -52.5], [-1.57, 0, 0], [4.22, 60.3, 2], 3.0, 0);
        a.c([1.87, -0.33994, -35.78], true);
        a.p([0, 11.20012, -36.59], [0, 0, 0], [8.72, 60.3, 2], 1, 0);
        a.p([-3.26, 11.20018, -36.05], [-1.57, 0, 0], [4.22, 60.3, 2], 1, 0);
        a.p([3.02, 11.200239999999999, -36.05], [-1.57, 0, 0], [4.22, 60.3, 2], 1, 0);
        a.c([-2.29, -0.3397, -35.78], true);
        a.c([-0.25, 3.97, -35.78], true);
        a.c([-1.97, 9.17006, -35.78], true);
        a.c([2.1, 9.170119999999999, -35.78], true);
        a.c([0.33, 13.76018, -35.78], true);
        a.c([-2.1, 18.37024, -35.78], true);
        a.c([1.88, 18.3703, -35.78], true);
        a.c([0.34, 23.720000000000002, -35.78], true);
        a.c([1.88, 29.32006, -36.81], true);
        a.c([1.13, 29.320120000000003, -36.81], true);
        a.c([0.1, 29.32018, -36.81], true);
        a.c([-1.84, 35.55024, -36.81], true);
        a.c([-1.81, 40.020300000000006, -36.81], true);
        a.c([2.08, 40.02, -36.81], true);
        a.c([2.08, 40.02006, -56.65], true);
        a.c([-1.81, 40.020120000000006, -56.65], true);
        a.c([-1.84, 35.550180000000005, -56.65], true);
        a.c([0.1, 29.320240000000002, -56.65], true);
        a.c([1.13, 29.320300000000003, -56.65], true);
        a.c([1.88, 29.32, -56.65], true);
        a.c([0.34, 23.72006, -55.62], true);
        a.c([1.88, 18.37012, -55.62], true);
        a.c([-2.1, 18.37018, -55.62], true);
        a.c([0.33, 13.760239999999998, -55.62], true);
        a.c([2.1, 9.1703, -55.62], true);
        a.c([-1.97, 9.17, -55.62], true);
        a.c([-0.25, 3.9700599999999997, -55.62], true);
        a.c([-2.29, -0.33988000000000007, -55.62], true);
        a.p([3.02, 27.10018, -55.88], [-1.57, 0, 0], [4.22, 60.3, 2], 1, 0);
        a.p([-3.26, 27.10024, -55.88], [-1.57, 0, 0], [4.22, 60.3, 2], 1, 0);
        a.p([0, 27.1003, -56.43], [0, 0, 0], [8.72, 60.3, 2], 1, 0);
        a.c([1.87, -0.33999999999999997, -55.62], true);
        a.p([0, 9.18006, -49.23], [0, 0, 0], [6.52, 60.3, 2], 3.0, 0);
    },
    post: function() {
        a.m('P0').unfreezeWorldMatrix();
        a.m('P1').unfreezeWorldMatrix();
        a.m('P2').unfreezeWorldMatrix();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -33.04) {
                    this.section_id += 1
                }
                break;
            case 1:
                a.mov('P0', 'y', 0.15);
                if (PZ < -36.68) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -52.43) {
                    this.section_id += 1
                }
                break;
            case 3:
                a.mov('P1', 'y', -0.15);
                a.mov('P2', 'y', -0.15);
                if (PZ < -56.470000000000006) {
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0, -6.489940000000001, -31.42], [0, 0, 0], [4.22, 0.52, 8.82]);
        a.re('P1', [0, 38.57018, -47.35], [0, 0, 0], [6.84, 1.8, 19.1]);
        a.re('P2', [0, 40.73024, -56.16], [0, 0, 0], [6.84, 1.8, 19.1]);
        a.re('P3', [0, -4.35, -19.63], [0, 0, 0], [2, 0.52, 8.82]);
        a.re('P4', [0, -6.489940000000001, -25.67], [0, 0, 0], [2, 0.52, 8.82]);
        a.re('P5', [0, -2.06988, -11.46], [0, 0, 0], [2, 0.52, 8.82]);
        a.re('P6', [0, 0.00018, -3.05], [0, 0, 0], [2, 0.52, 8.82]);
        a.re('P7', [0, -4.62976, -60.14], [0, 0, 0], [6.84, 1.8, 25.54]);
        a.re('P8', [-2.6, 24.930300000000003, -52.5], [-1.57, 0, 0], [4.22, 60.3, 2]);
        a.re('P9', [3.02, 24.93, -52.5], [-1.57, 0, 0], [4.22, 60.3, 2]);
        a.re('C0', [1.87, -0.33994, -35.78], [0, 0, 0], [2, 2, 2]);
        a.re('P10', [0, 11.20012, -36.59], [0, 0, 0], [8.72, 60.3, 2]);
        a.re('P11', [-3.26, 11.20018, -36.05], [-1.57, 0, 0], [4.22, 60.3, 2]);
        a.re('P12', [3.02, 11.200239999999999, -36.05], [-1.57, 0, 0], [4.22, 60.3, 2]);
        a.re('C1', [-2.29, -0.3397, -35.78], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [-0.25, 3.97, -35.78], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [-1.97, 9.17006, -35.78], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [2.1, 9.170119999999999, -35.78], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [0.33, 13.76018, -35.78], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [-2.1, 18.37024, -35.78], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [1.88, 18.3703, -35.78], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [0.34, 23.720000000000002, -35.78], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [1.88, 29.32006, -36.81], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [1.13, 29.320120000000003, -36.81], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [0.1, 29.32018, -36.81], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [-1.84, 35.55024, -36.81], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [-1.81, 40.020300000000006, -36.81], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [2.08, 40.02, -36.81], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [2.08, 40.02006, -56.65], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [-1.81, 40.020120000000006, -56.65], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [-1.84, 35.550180000000005, -56.65], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [0.1, 29.320240000000002, -56.65], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [1.13, 29.320300000000003, -56.65], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [1.88, 29.32, -56.65], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [0.34, 23.72006, -55.62], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [1.88, 18.37012, -55.62], [0, 0, 0], [2, 2, 2]);
        a.re('C23', [-2.1, 18.37018, -55.62], [0, 0, 0], [2, 2, 2]);
        a.re('C24', [0.33, 13.760239999999998, -55.62], [0, 0, 0], [2, 2, 2]);
        a.re('C25', [2.1, 9.1703, -55.62], [0, 0, 0], [2, 2, 2]);
        a.re('C26', [-1.97, 9.17, -55.62], [0, 0, 0], [2, 2, 2]);
        a.re('C27', [-0.25, 3.9700599999999997, -55.62], [0, 0, 0], [2, 2, 2]);
        a.re('C28', [-2.29, -0.33988000000000007, -55.62], [0, 0, 0], [2, 2, 2]);
        a.re('P13', [3.02, 27.10018, -55.88], [-1.57, 0, 0], [4.22, 60.3, 2]);
        a.re('P14', [-3.26, 27.10024, -55.88], [-1.57, 0, 0], [4.22, 60.3, 2]);
        a.re('P15', [0, 27.1003, -56.43], [0, 0, 0], [8.72, 60.3, 2]);
        a.re('C29', [1.87, -0.33999999999999997, -55.62], [0, 0, 0], [2, 2, 2]);
        a.re('P16', [0, 9.18006, -49.23], [0, 0, 0], [6.52, 60.3, 2]);
    },
    physics_update: function() {},
    render_update: function() {}
}
