class GeometryCalc {
  static calcAngle(pointFrom: Position, pintTo: Position): Angle {
    var dy = pintTo.y - pointFrom.y;
    var dx = pintTo.x - pointFrom.x;

    var angleRad = Math.atan2(dy, dx);

    var anglePi = 0;
    if (angleRad < 0)
      anglePi = (Math.PI * 2) - Math.abs(angleRad);
    else
      anglePi = angleRad;

    let result = Angle.fromPi(anglePi);
    return result;
  }
}