class Angle {
    public valuePi: number = 0;
    public valueDegrees: number = 0;
    public valueRads: number = 0;

    static default(): Angle {
        return new Angle();
    }

    static fromPi(piAngle: number) {
        if (piAngle == null)
            throw new Error(`piAngle is NULL.`);
        if (piAngle < 0)
            throw new Error(`piAngle is negative: ${piAngle}.`);
        if (piAngle > Math.PI * 2)
            throw new Error(`piAngle is more than ${Math.PI * 2}: ${piAngle}.`);


        let result = new Angle();
        result.valuePi = piAngle;

        // rads to degs, range (-180, 180]
        result.valueDegrees = piAngle * 180 / Math.PI;

        // range [0, 360)
        result.valueRads = piAngle >= 0 ? piAngle : 360 + piAngle;

        return result;
    }
}