AFRAME.registerComponent('spawner-ply', {
  update: function () {
    var el = this.el;
    var spawn = this.spawn.bind(this);
    if (this.on === this.data.on) { return; }
    el.removeEventListener(this.on, spawn);
    el.addEventListener(this.data.on, spawn);
    this.on = this.data.on;
  },

  spawn: function () {
    var el = this.el;
    var matrixWorld = el.object3D.matrixWorld;
    var position = new THREE.Vector3();
    position.setFromMatrixPosition(matrixWorld);
    var entity = document.createElement('e-entity');
    entity.setAttribute('position', position);
    entity.setAttribute('ply-model', this.data.model);
    el.sceneEl.appendChild(entity);
  }
});
