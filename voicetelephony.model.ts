export interface WidebandSpeech{
    speechDelay: number,
    speechPacketLossRate: number,
    talkerEchoLoudness: number,
    equipmentImpairment: number,
    packetLossRoubustness: number
};

export interface NarrowbandSpeech{
    speechDelayNB: number,
    speechPacketLossRateNB: number,
    talkerEchoLoudnessNB: number,
    combination: number
};

export interface FullbandE{
    absoluteDelay: number,
    packetLossProb: number,
    equipmentImpairmentFac: number,
    packetLossImpairmentFac: number
};

export interface WidebandE{
    meanOneWayDelay: number,
    packetLossProb: number,
    talkerEchoLoudRating: number,
    equipmentImpairment: number,
    absoluteDelay: number,
    roundTripDelay: number,
    weightedEchoPathLoss: number,
    packetLossRobustness: number
};

export interface NarrowbandE{
    electricCircuitNoise: number,
    noiseFloor: number,
    roomNoiseS: number,
    roomNoiseR: number,
    sLoudnessRating: number,
    rLoudnessRating: number,
    sidetoneMaskingRating: number,
    dFactorR: number,
    dFactorS: number,
    classDelaySensitivity:string,
    meanOneWayDelay: number,
    absoluteDelay: number,
    roundTripDelay: number,
    talkerEchoLoudness: number,
    weightedEchoPathLoss: number,
    qdu: number,
    equipmentImpairmentFac: number,
    packetLossRobustness: number,
    packetLossProb: number,
    burstRate: number,
    advantageFactor: number
};