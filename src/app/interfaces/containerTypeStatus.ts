export interface ContainerTypeStatus {
    type: string,
    totalContainerCount: number,
    runningContainerCount: number,
    completedContainerCount: number,
    pendingContainerCount: number,
    failedContainerCount: number,
    succeededContainerCount: number
}