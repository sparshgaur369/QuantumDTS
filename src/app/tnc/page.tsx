import Image from "next/image";
import clsx from 'clsx';
import Link from "next/link";
import { pricingCards } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Home() {
  return (
    <>
    <embed width={800} height={800} src="/policies/tnc.pdf"/>
    </>
  );
}
