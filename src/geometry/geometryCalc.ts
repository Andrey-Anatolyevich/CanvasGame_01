class GeometryCalc {
  public calcAngle(pointFrom: Position, pintTo: Position): Angle {
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

  public getNewPosition(oldPosition: Position, speed: number, angle: Angle): Position {
    let jumpX = speed * Math.cos(angle.valueRads);
    let jumpY = speed * Math.sin(angle.valueRads);

    let newX = oldPosition.x + jumpX;
    let newY = oldPosition.y + jumpY;

    let result = new Position(newX, newY);
    return result;
  }

  public doCollide(alpha: ItemBase, beta: ItemBase) {
    let alphaHalfWidth = alpha.width/2;
    let alphaHalfHeight = alpha.width/2;
    let alphaYMin = alpha.position.y - alphaHalfHeight;
    let alphaYMax = alpha.position.y + alphaHalfHeight;
    let alphaXMin = alpha.position.x - alphaHalfWidth;
    let alphaXMax = alpha.position.x + alphaHalfWidth;

    let betaHalfWidth = beta.width/2;
    let betaHalfHeight = beta.width/2;
    let betaYMin = beta.position.y - betaHalfHeight;
    let betaYMax = beta.position.y + betaHalfHeight;
    let betaXMin = beta.position.x - betaHalfWidth;
    let betaXMax = beta.position.x + betaHalfWidth;

    if (alphaYMin > betaYMax
      || alphaYMax < betaYMin
      || alphaXMin > betaXMax
      || alphaXMax < betaXMin)
      return false;

    return true;
  }
}