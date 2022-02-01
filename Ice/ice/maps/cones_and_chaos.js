var map = {
    title: "Cones and Chaos",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([44.3, -6.4398800000000005, -271.51]);
        a.p([58.44, -2.55994, -64.16], [0, 0, 0], [14.16, 1.02, 22.5], 2.0, 10000.0);
        a.c([57.1, -13.14982, -10.39], true);
        a.c([59.31, -13.149760000000002, -20.21], true);
        a.c([59.31, -13.149700000000001, -22.69], true);
        a.c([58.3, -13.15, -25.14], true);
        a.c([59.38, -13.149939999999999, -29.63], true);
        a.c([57.09, -13.149880000000001, -31.88], true);
        a.c([69.25, -1.8298199999999998, -17.12], true);
        a.c([69.25, -1.8297599999999998, -18.82], true);
        a.c([59.45, -13.149700000000001, -47.53], true);
        a.c([67.13, -1.83, -21.86], true);
        a.c([59.2, -13.149939999999999, -35.42], true);
        a.c([71.91, -1.8298799999999997, -4.32], true);
        a.c([78.14, -1.8298199999999998, 1.36], true);
        a.c([57.12, -13.149760000000002, -44.65], true);
        a.c([58.33, -13.149700000000001, -37.98], true);
        a.c([58.89, -13.15, -52.71], true);
        a.c([56.99, -13.149939999999999, -53.65], true);
        a.p([62.58, -14.21988, -132.22], [-0.39, 0, 0], [1.12, 1.04, 24], 1, 0);
        a.p([-0.71, -2.55982, -11.73], [0, 0, 0], [4.48, 2.12, 29.14], 1, 0);
        a.p([-5.21, -2.55976, -37.2], [0, 0, 0], [4.48, 2.12, 22.5], 1, 0);
        a.p([3.98, -2.5597, -59.15], [0, 0, 0], [14.26, 2.12, 22.5], 1, 0);
        a.p([20.93, -2.56, -64.1], [-1.92, 0, 0], [4.48, 2.12, 22.5], 1, 0);
        a.p([44.34, -7.63994, -214.58], [0, 0, 0], [1.12, 1.04, 24], 1, 0);
        a.p([41.77, -2.55988, -56.47], [-1.9, 0.3, -0.11], [4.48, 2.12, 22.5], 1, 0);
        a.p([62.18, 3.1401799999999995, -43.96], [-2.62, 0.62, 0.08], [4.48, 2.12, 22.5], 1, 0);
        a.p([75.6, -2.55976, -0.98], [0.69, 0, 0], [2.56, 1.24, 31.82], 3.0, 0);
        a.p([68.18, -2.5597, -22.65], [0, 0, 0], [3.62, 1.24, 26.7], 3.0, 0);
        a.p([86.21, -2.56, -3.32], [0, 0, 0], [5.68, 1.24, 26.7], 1, 0);
        a.p([89.6, -0.36994, -0.12], [0, 0, 1.57], [5.68, 1.24, 34.46], 1, 0);
        a.p([111.18, 12.770119999999999, -25.5], [-1.57, 0.57, 0], [2.68, 6.74, 62.54], 1, 0);
        a.p([57.95, -14.21982, -174.73], [0, 0, 0], [1.12, 1.04, 24], 1, 0);
        a.p([129.48, 6.56024, -11.88], [0, 0, 0], [14.58, 1.24, 26.7], 1, 0);
        a.p([112.6, -11.0497, 8.86], [0, 0, 0], [51.88, 1.26, 17.36], 1, 0);
        a.p([73.32, -12.55, 14.71], [1.57, -0.12, 0], [5.68, 1.24, 26.7], 1, 0);
        a.p([58.41, 1.60006, -67.53], [-0.69, 0, 0.66], [0.96, 4.06, 1.26], 1, 0);
        a.p([62.44, -14.21988, -153.29], [0.39, 0, 0], [1.12, 1.04, 24], 1, 0);
        a.p([58.21, -14.34982, -109.48], [0, 0, 0], [1.12, 1.04, 24], 1, 0);
        a.p([44.34, -7.63976, -238.34], [0, 0, 0], [1.12, 1.04, 24], 1, 0);
        a.p([51.26, -10.7497, -195.22], [0.65, 0.32, 0], [1.12, 1.04, 24], 1, 0);
        a.p([44.34, -7.64, -262.08], [0, 0, 0], [1.12, 1.04, 24], 1, 0);
        a.p([58.41, 1.60006, -67.53], [-0.69, 0, -0.7], [0.94, 4.14, 1.26], 1, 0);
        a.p([58.21, -14.21982, -40.37], [0, 0, 0], [4.48, 1.04, 116.34], 2.0, 0);
        a.p([113.54, 11.740239999999998, -20.66], [-1.57, 0.56, 0], [8.4, 2.28, 61.32], 2.0, 0);
    },
    post: function() {},
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -99.33) {
                    speed = default_speed * 0.5;
                    steer = default_steer * 2.0;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -249.41000000000003) {
                    speed = default_speed;
                    steer = default_steer;
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [58.44, -2.55994, -64.16], [0, 0, 0], [14.16, 1.02, 22.5]);
        a.re('C0', [57.1, -13.14982, -10.39], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [59.31, -13.149760000000002, -20.21], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [59.31, -13.149700000000001, -22.69], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [58.3, -13.15, -25.14], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [59.38, -13.149939999999999, -29.63], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [57.09, -13.149880000000001, -31.88], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [69.25, -1.8298199999999998, -17.12], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [69.25, -1.8297599999999998, -18.82], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [59.45, -13.149700000000001, -47.53], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [67.13, -1.83, -21.86], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [59.2, -13.149939999999999, -35.42], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [71.91, -1.8298799999999997, -4.32], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [78.14, -1.8298199999999998, 1.36], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [57.12, -13.149760000000002, -44.65], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [58.33, -13.149700000000001, -37.98], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [58.89, -13.15, -52.71], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [56.99, -13.149939999999999, -53.65], [0, 0, 0], [2, 2, 2]);
        a.re('P1', [62.58, -14.21988, -132.22], [-0.39, 0, 0], [1.12, 1.04, 24]);
        a.re('P2', [-0.71, -2.55982, -11.73], [0, 0, 0], [4.48, 2.12, 29.14]);
        a.re('P3', [-5.21, -2.55976, -37.2], [0, 0, 0], [4.48, 2.12, 22.5]);
        a.re('P4', [3.98, -2.5597, -59.15], [0, 0, 0], [14.26, 2.12, 22.5]);
        a.re('P5', [20.93, -2.56, -64.1], [-1.92, 0, 0], [4.48, 2.12, 22.5]);
        a.re('P6', [44.34, -7.63994, -214.58], [0, 0, 0], [1.12, 1.04, 24]);
        a.re('P7', [41.77, -2.55988, -56.47], [-1.9, 0.3, -0.11], [4.48, 2.12, 22.5]);
        a.re('P8', [62.18, 3.1401799999999995, -43.96], [-2.62, 0.62, 0.08], [4.48, 2.12, 22.5]);
        a.re('P9', [75.6, -2.55976, -0.98], [0.69, 0, 0], [2.56, 1.24, 31.82]);
        a.re('P10', [68.18, -2.5597, -22.65], [0, 0, 0], [3.62, 1.24, 26.7]);
        a.re('P11', [86.21, -2.56, -3.32], [0, 0, 0], [5.68, 1.24, 26.7]);
        a.re('P12', [89.6, -0.36994, -0.12], [0, 0, 1.57], [5.68, 1.24, 34.46]);
        a.re('P13', [111.18, 12.770119999999999, -25.5], [-1.57, 0.57, 0], [2.68, 6.74, 62.54]);
        a.re('P14', [57.95, -14.21982, -174.73], [0, 0, 0], [1.12, 1.04, 24]);
        a.re('P15', [129.48, 6.56024, -11.88], [0, 0, 0], [14.58, 1.24, 26.7]);
        a.re('P16', [112.6, -11.0497, 8.86], [0, 0, 0], [51.88, 1.26, 17.36]);
        a.re('P17', [73.32, -12.55, 14.71], [1.57, -0.12, 0], [5.68, 1.24, 26.7]);
        a.re('P18', [58.41, 1.60006, -67.53], [-0.69, 0, 0.66], [0.96, 4.06, 1.26]);
        a.re('P19', [62.44, -14.21988, -153.29], [0.39, 0, 0], [1.12, 1.04, 24]);
        a.re('P20', [58.21, -14.34982, -109.48], [0, 0, 0], [1.12, 1.04, 24]);
        a.re('P21', [44.34, -7.63976, -238.34], [0, 0, 0], [1.12, 1.04, 24]);
        a.re('P22', [51.26, -10.7497, -195.22], [0.65, 0.32, 0], [1.12, 1.04, 24]);
        a.re('P23', [44.34, -7.64, -262.08], [0, 0, 0], [1.12, 1.04, 24]);
        a.re('P24', [58.41, 1.60006, -67.53], [-0.69, 0, -0.7], [0.94, 4.14, 1.26]);
        a.re('P25', [58.21, -14.21982, -40.37], [0, 0, 0], [4.48, 1.04, 116.34]);
        a.re('P26', [113.54, 11.740239999999998, -20.66], [-1.57, 0.56, 0], [8.4, 2.28, 61.32]);
    },
    physics_update: function() {},
    render_update: function() {}
}
