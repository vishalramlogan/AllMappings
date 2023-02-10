export interface HigherResolution{
  audioBitrate: number,
  videoBitrate: number,
  rtpPacketLoss: number,
  rtpPacketLossBurstiness: number,
  numRTPPacketsTSPackets: number,
  burstLengthA: number,
  audioCodec: string
}

export interface LowerResolution{
    audioBitrateLR: number,
    audioFrameLength: number,
    averageBurstIP: number,
    maxSizeAudioStream: number,
    lossRateIPPackets: number,
    numAudioFrames: number,
    audioCodec: string
}