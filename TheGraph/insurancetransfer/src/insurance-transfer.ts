import {
  EtherClaimed as EtherClaimedEvent,
  EtherClaimedBack as EtherClaimedBackEvent,
  EtherSent as EtherSentEvent
} from "../generated/InsuranceTransfer/InsuranceTransfer"
import { EtherClaimed, EtherClaimedBack, EtherSent } from "../generated/schema"

export function handleEtherClaimed(event: EtherClaimedEvent): void {
  let entity = new EtherClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEtherClaimedBack(event: EtherClaimedBackEvent): void {
  let entity = new EtherClaimedBack(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEtherSent(event: EtherSentEvent): void {
  let entity = new EtherSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
