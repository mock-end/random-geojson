var expect = require('chai').expect;


describe('random-geojson: ', function () {

  var geojson = require('../../');

  it('common', function () {

    var ret   = geojson({ fixed: 2 });
    var parts = ret.split(', ');

    expect(parts[0])
      .to.be.within(-90, 90)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,2})?$/);

    expect(parts[1])
      .to.be.within(-180, 180)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,2})?$/);

    expect(parts[2])
      .to.be.within(0, 8488)
      .and
      .to.be.match(/^\d+(\.\d{1,2})?$/);

    ret   = geojson();
    parts = ret.split(', ');

    expect(parts[0])
      .to.be.within(-90, 90)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,5})?$/);

    expect(parts[1])
      .to.be.within(-180, 180)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,5})?$/);

    expect(parts[2])
      .to.be.within(0, 8488)
      .and
      .to.be.match(/^\d+(\.\d{1,5})?$/);
  });
});
