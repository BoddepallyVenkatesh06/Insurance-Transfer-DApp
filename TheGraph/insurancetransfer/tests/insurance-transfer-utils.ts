import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  EtherClaimed,
  EtherClaimedBack,
  EtherSent
} from "../generated/InsuranceTransfer/InsuranceTransfer"

export function createEtherClaimedEvent(
  sender: Address,
  receiver: Address,
  amount: BigInt
): EtherClaimed {
  let etherClaimedEvent = changetype<EtherClaimed>(newMockEvent())

  etherClaimedEvent.parameters = new Array()

  etherClaimedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  etherClaimedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  etherClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return etherClaimedEvent
}

export function createEtherClaimedBackEvent(
  sender: Address,
  amount: BigInt
): EtherClaimedBack {
  let etherClaimedBackEvent = changetype<EtherClaimedBack>(newMockEvent())

  etherClaimedBackEvent.parameters = new Array()

  etherClaimedBackEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  etherClaimedBackEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return etherClaimedBackEvent
}

export function createEtherSentEvent(
  sender: Address,
  receiver: Address,
  amount: BigInt
): EtherSent {
  let etherSentEvent = changetype<EtherSent>(newMockEvent())

  etherSentEvent.parameters = new Array()

  etherSentEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  etherSentEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  etherSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return etherSentEvent
}
