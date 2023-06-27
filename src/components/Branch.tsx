import {ItemProps, ItemWrapper} from "@/components/Item";
import {ReactNode} from "react";
import {Arrow, ArrowComponentProps} from "@/components/Arrow";

export type BranchComponentProps = { branchComponent?: (props: BranchProps) => ReactNode }

export type BranchProps = Pick<ItemProps, 'arrowTo' | 'id' | 'text' | 'type'> & { uniqueKey: string } & ArrowComponentProps & BranchComponentProps

export const Branch = (props: BranchProps) => {
  if (props.branchComponent) {
    return <props.branchComponent {...props} />
  }

  return <>
    <ItemWrapper id={props.id + props.uniqueKey} classNames="bg-[#F44D27] w-[120px] text-[#E3D7D9]">
      {props.text}
    </ItemWrapper>
    {props.arrowTo?.map((arrow) => {
      return <Arrow key={arrow.to} arrow={arrow.to} dashedArrow={arrow.dashed || false} id={props.id} />
    })}
  </>
}
