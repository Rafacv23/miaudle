import React from "react"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import { Card } from "@nextui-org/card"
import { useStore } from "@/lib/CatsStorage"

export default function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const reset = useStore((state) => state.reset)

  const handleReset = () => {
    const response = window.confirm(
      "You are going to reset your progress, are you sure?"
    )
    if (response) {
      reset()
    }
  }

  return (
    <header>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Miaudle</ModalHeader>
              <ModalBody>
                <p>
                  Miaudle it's a free open source idle game created by Rafa
                  Canosa.
                </p>
                <p>
                  If you like the project you can check the{" "}
                  <a
                    href="/github"
                    target="blank"
                    title="Miaudle github repo"
                    className=" text-blue-500"
                  >
                    github repo
                  </a>{" "}
                  and give me an star ⭐ , or check{" "}
                  <a
                    href="www.rafacanosa.dev"
                    target="blank"
                    title="Rafa canosa portfolio"
                    className="text-blue-500"
                  >
                    my other projects
                  </a>
                  . And also you can{" "}
                  <a
                    href="ko-fi.com/rafacanosa"
                    target="blank"
                    title="Buy me a coffee"
                    className="text-blue-500"
                  >
                    buy me a coffee ☕
                  </a>
                  .
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Card className="flex flex-row p-4 justify-between">
        <Button variant="flat" color="default" onPress={handleReset}>
          Reset
        </Button>
        <Button onPress={onOpen} variant="flat" color="default">
          About
        </Button>
      </Card>
    </header>
  )
}
