export interface HigherResolution{
    numPixelsPerVideo: number,
    videoResolution: string,
    frameRate: number,
    sliceFrame: number,
    videoBitrate: number,
    videoPLC: string,
    freezingRatio:number,
    lossMagnitude: number
}

export interface LowerResolution{
  packetLoss: string,
  rebuffering: string,
  videoWidth: number,
  videoHeight:number,
  videoPLC: string,
  rebufferingLength: number,
  numRebufferingEvents: number,
  rebufferingFactor: number,
  numVideos: number,
  videoContentCoding: number,
  codingCompression: number,
  measureTime: number ,
  ipPacketLoss: number,
  ipPacketLossRate:number,
  gopLength: number,
  videoBitrate: number,
  videoFrameRate: number
}