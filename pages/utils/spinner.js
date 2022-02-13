export default function Spinner() {
    return (
        <>
            <div class="p-10 min-h-screen flex items-center justify-center">
                <div class="animate-spin">
                    <div class="h-16 w-16 bg-white bg-opacity-50 rounded-full flex items-center justify-center">
                        <span class="text-8xl">🌎</span>
                    </div>
                </div>
            </div>
        </>
    )
}